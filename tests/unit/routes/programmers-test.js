import { module, test } from 'qunit';
import { setupTest } from 'ember-1/tests/helpers';

module('Unit | Route | programmers', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:programmers');
    assert.ok(route);
  });
});
