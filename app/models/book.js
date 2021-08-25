import Model, { belongsTo, attr } from '@ember-data/model';

export default class BookModel extends Model {
  @belongsTo('author') author;
  @attr('string') title;
  @attr('string') year;
}
