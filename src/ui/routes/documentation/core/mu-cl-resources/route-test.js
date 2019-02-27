import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | documentation/core/mu-cl-resources', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:documentation/core/mu-cl-resources');
    assert.ok(route);
  });
});
