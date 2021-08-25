import Route from '@ember/routing/route';

export default class BookIndexRoute extends Route {
  queryParams = {
    rating: {
      refreshModel: true,
    },
  };

  model({ rating }) {
    let book = this.modelFor('book');

    return this.store.query('review', { book: book.id, rating });
  }
}
