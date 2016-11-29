import Adapter from 'coalesce/adapter';

import PayloadMiddleware from './middleware/payload';

import MetaMiddleware from 'coalesce/middleware/meta';

export default class LegacyAdapter extends Adapter {

  static middleware = Adapter.middleware.insertBefore(MetaMiddleware, PayloadMiddleware);

}
