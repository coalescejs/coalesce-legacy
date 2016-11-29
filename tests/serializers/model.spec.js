import {expect} from 'chai';

import Container, {Post, Comment, User} from '../support/simple-hierarchy';

import Serializer from 'coalesce-legacy/serializers/model';
import Graph from 'coalesce/graph';
import IdManager from 'coalesce/id-manager';

describe('serializers/model', function() {

  lazy('container', () => new Container());
  lazy('graph', function() {
    return this.container.get(Graph);
  });

  subject('serializer', function() {
    return this.container.get(Serializer);
  });

  describe('.serialize()', function() {

    lazy('value', function() {
      let post = this.graph.build(Post, {
        id: "1",
        clientId: "$post1",
        rev: 1,
        clientRev: 2
      });
      post.user = this.graph.build(User, {id: 2});
      post.comments.push(this.graph.build(Comment, {id: 3}));
      return post;
    });

    subject(function() {
      return this.serializer.serialize(this.value);
    });

    it('serializes belongsTo with suffixes', function() {
      expect(this.subject.user_id).to.eq(2);
      expect(this.subject.comment_ids).to.not.be.defined;
    });

  });

  describe('.deserialize()', function() {

    lazy('value', () => {
      return {
        type: 'post',
        id: 1,
        client_id: "$post1",
        rev: 1,
        client_rev: 2,
        comment_ids: [2, 3],
        user_id: 4
      };
    });

    subject(function() {
      return this.serializer.deserialize(this.value, this.graph);
    });

    it('deserializes relationships with suffixes', function() {
      expect(this.subject.user.id).to.eq("4");
      expect(Array.from(this.subject.comments).map((c) => c.id)).to.eql(["2", "3"]);
    });

  });

});
