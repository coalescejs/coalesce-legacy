import Adapter from 'coalesce/adapter';

import PayloadMiddleware from './middleware/payload';

import {clone} from 'lodash';

let middleware = clone(Adapter.middleware);
middleware.splice(6, 0, PayloadMiddleware);

export default class LegacyAdapter extends Adapter {

  static middleware = middleware;

}
