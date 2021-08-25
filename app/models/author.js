import Model, { attr, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
  @hasMany('book') books;
  @attr('string') name;
}
