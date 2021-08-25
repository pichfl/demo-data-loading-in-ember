import faker from 'faker';
import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title: () => faker.company.catchPhrase(),
  year: () => faker.datatype.number({ min: 1800, max: 2021 }),
});
