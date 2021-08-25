import faker from 'faker';
import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name: () => faker.name.findName(),
});
