import {expect} from 'chai';

import Container from 'coalesce/default-container';

import LegacyAdapter from 'coalesce-legacy/adapter';

describe('adapter', function() {

  describe('class', function() {

    it('has payload middleware', function() {
      let middleware = LegacyAdapter.middleware;
      expect(middleware[6].name).to.eq('PayloadMiddleware');
    });

  });

});
