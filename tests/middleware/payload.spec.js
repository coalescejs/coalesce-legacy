import { expect } from 'chai';

import Session from 'coalesce/session';
import Container, { Post, Comment, User } from '../support/simple-hierarchy';

import PayloadMiddleware from 'coalesce-legacy/middleware/payload';

describe('middleware/payload', function() {
  lazy('container', () => new Container());

  lazy('session', function() {
    return this.container.get(Session);
  });

  subject('middleware', function() {
    return this.container.get(PayloadMiddleware);
  });

  describe('.call()', function() {
    lazy('entity', function() {
      return this.session.build(Post, {
        id: '1',
        title: 'A Post'
      });
    });

    lazy('payload', function() {
      return {
        post: {
          id: 1,
          title: 'A Post (Updated)',
          comment_ids: [1, 2]
        },
        comments: [
          {
            id: 2,
            body: 'Comment 1'
          },
          {
            id: 3,
            body: 'Comment 2'
          }
        ]
      };
    });

    subject(function() {
      let { entity, session } = this;
      return this.middleware.call({ entity, session }, () => Promise.resolve(this.payload));
    });

    it('sideloads', async function() {
      await this.subject;
      let comment1 = this.session.getBy(Comment, { id: '2' });
      let comment2 = this.session.getBy(Comment, { id: '3' });
      expect(comment1.body).to.eq('Comment 1');
      expect(comment2.body).to.eq('Comment 2');
    });
  });
});
