import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Steve', 'Bill', 'Mary'];
  }
}
