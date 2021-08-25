import Model, { attr, belongsTo } from '@ember-data/model';

export default class ReviewModel extends Model {
  @belongsTo('book') book;

  @attr() text;
  @attr() rating;
}
