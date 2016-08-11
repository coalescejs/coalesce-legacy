import 'whatwg-fetch';

/**
 * Middleware to perform the request
 */
export default class PayloadMiddleware {

  static singleton = true;

  async call(env, next) {
    return next();
  }

}
