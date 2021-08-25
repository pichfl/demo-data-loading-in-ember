import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TbookController extends Controller {
  queryParams = ['rating'];

  @tracked rating = null;

  lastRating = null;

  @action
  ratingChange() {
    if (this.rating === this.lastRating) {
      return;
    }

    this.lastRating = this.rating;
    this.model.loadReviewsTask.perform(this.model.book, this.rating);
  }
}
