import EmberRouter from '@ember/routing/router';
import config from 'data-loading/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('book', { path: '/book/:book_id' }, function () {});
  this.route('tbook', { path: '/tbook/:book_id' });
});
