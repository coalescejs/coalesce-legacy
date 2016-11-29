import { expect } from 'chai';

import fetchMock from 'fetch-mock';

import Container, {Post, Comment, User} from '../support/simple-hierarchy';
import Model from 'coalesce/model';
import Adapter from 'coalesce/adapter';
import Session from 'coalesce/session';
import Graph from 'coalesce/graph';
import Query from 'coalesce/query';

describe('acceptance/simple hierarchy of models', function() {

  lazy('container', () => new Container());
  lazy('session', function() {
    return this.container.get(Session);
  });

  beforeEach(function() {
    fetchMock.restore();
  });

  it('loads and refreshes existing hierarchy', async function() {
    let {session} = this;

    fetchMock.once('/users/1', JSON.stringify({
      user: {
        type: 'user',
        id: 1,
        rev: 2,
        name: 'Brogrammer',
        post_ids: [2, 3]
      },
      posts: [
        {
          id: 2,
          title: 'A',
          user_id: 1
        },
        {
          id: 3,
          title: 'B',
          user_id: 1
        }
      ]
    }));

    let user = session.fetchBy(User, {id: 1});
    let posts = user.posts;
    expect(posts.size).to.eq(0);

    await session.load(user);
    expect(Array.from(posts).map((p) => p.id)).to.eql(['2', '3']);
    expect(Array.from(posts).map((p) => p.title)).to.eql(['A', 'B']);

    fetchMock.once('/users/1', JSON.stringify({
      user: {
        type: 'user',
        id: 1,
        rev: 3,
        name: 'Brogrammer',
        post_ids: [2, 3, 4]
      },
      posts: [
        {
          id: 2,
          title: 'A',
          user_id: 1
        },
        {
          id: 3,
          title: 'B',
          user_id: 1
        },
        {
          id: 4,
          title: 'C',
          user_id: 1
        }
      ]
    }));

    await session.refresh(user);

    expect(Array.from(posts).map((p) => p.id)).to.eql(['2', '3', '4']);
    expect(Array.from(posts).map((p) => p.title)).to.eql(['A', 'B', 'C']);

  });

});
