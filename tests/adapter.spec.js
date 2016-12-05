import {expect} from 'chai';

import Container from 'coalesce/default-container';

import LegacyAdapter from 'coalesce-legacy/adapter';

describe('adapter', function() {

  describe('class', function() {

    it('has payload middleware', function() {
      let middleware = LegacyAdapter.middleware.configs;
      expect(middleware[5][0].name).to.eq('PayloadMiddleware');
    });

  });

});
