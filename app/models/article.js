import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  headline: DS.attr(),
  author: DS.attr(),
  content: DS.attr()
});
