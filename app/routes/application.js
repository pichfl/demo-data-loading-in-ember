import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  //
  async beforeModel() { super.beforeModel(...arguments); }
  async model() {}
  async afterModel() { super.afterModel(...arguments); }
  //
}
