import Container from 'coalesce/container';
import Graph from 'coalesce/graph';

import {pluralize, singularize} from 'inflection';

/**
 * Middleware to handle payloads.
 */
export default class PayloadMiddleware {

  static singleton = true;
  static dependencies = [Container];

  constructor(container) {
    this.container = container;
  }

  async call({entity, session}, next) {
    let hash = await next();
    let primaryPayload;

    for(var key in hash) {
      let value = hash[key];

      if(this.isPrimaryKey(entity, key)) {
        primaryPayload = value;
      } else {
        this.sideload(key, value, session);
      }
    }

    return primaryPayload;
  }

  sideload(key, value, session) {
    if(!Array.isArray(value)) {
      value = [value];
    }
    let graph = this.container.get(Graph);
    let type = this.typeFor(key);
    let serializer = this.container.serializerFor(type);
    for(var hash of value) {
      hash.type = hash.type || type.typeKey;
      let entity = serializer.deserialize(graph, hash);
      session.merge(entity);
    }
  }

  isPrimaryKey(entity, key) {
    if(entity.isQuery) {
      return key === pluralize(entity.type.typeKey);
    } else {
      return key === entity.typeKey;
    }
  }

  typeFor(key) {
    key = singularize(key);
    return this.container.typeFor(key);
  }

}
