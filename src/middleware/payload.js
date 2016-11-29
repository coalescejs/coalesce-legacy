import Container from 'coalesce/container';
import Graph from 'coalesce/graph';

import {pluralize, singularize} from 'inflection';

/**
 * Middleware to handle payloads.
 */
export default class PayloadMiddleware {

  static dependencies = [Container];

  constructor(container) {
    this.container = container;
  }

  async call(ctx, next) {
    let {entity, session, body} = ctx;

    if(body && ctx.serialize !== false && entity.isModel) {
      ctx.body = {
        [entity.typeKey]: ctx.body
      };
    }

    let hash = await next();

    if(ctx.deserialize === false) {
      return hash;
    }

    let primaryPayload;

    for(var key in hash) {
      let value = hash[key];

      if(key === 'meta' || key === 'error') {
        // TODO
      } else if(this.isPrimaryKey(entity, key)) {
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
      let entity = serializer.deserialize(hash, graph, {type});
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
