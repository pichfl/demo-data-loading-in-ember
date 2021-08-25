import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class BookIndexController extends Controller {
  queryParams = ['rating'];

  @tracked rating = null;
}
