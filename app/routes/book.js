import Route from '@ember/routing/route';

export default class BookRoute extends Route {
  model({ book_id }) {
    let record = this.store.findRecord('book', book_id);

    return record;
  }
}
