import ModelSerializer from 'coalesce/serializers/model';

import {singularize} from 'inflection';

export default class LegacyModelSerializer extends ModelSerializer {

  /**
   * @protected
   */
  _keyFor(field) {
    let prefix = super._keyFor(field);
    if(!field.embedded) {
      if(field.kind === 'belongsTo') {
        return `${prefix}_id`;
      } else if(field.kind === 'hasMany') {
        return `${singularize(prefix)}_ids`;
      }
    }
    return prefix;
  }


}
