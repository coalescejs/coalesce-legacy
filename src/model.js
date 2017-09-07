import Model from 'coalesce/model';

import LegacyAdapter from './adapter';
import LegacyModelSerializer from './serializers/model';

export default class LegacyModel extends Model {
  static adapter = LegacyAdapter;
  static serializer = LegacyModelSerializer;
}
