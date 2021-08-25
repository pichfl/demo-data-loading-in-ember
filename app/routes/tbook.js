import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';

export default class TbookRoute extends Route {
  queryParams = {
    rating: {},
  };

  async model({ book_id: bookId, rating }) {
    let book = await this.store.findRecord('book', bookId, { reload: true });

    await this.loadReviewsTask.perform(book, rating);

    return {
      book,
      loadReviewsTask: this.loadReviewsTask,
    };
  }

  @task
  *loadReviewsTask(book, rating) {
    let reviews = yield this.store.query('review', { book: book.id, rating });

    return reviews;
  }
}
