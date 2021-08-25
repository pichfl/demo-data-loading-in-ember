import faker from 'faker';
import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  rating: () => faker.datatype.number({ min: 1, max: 5 }),
  text: () => faker.lorem.sentence(),
});
