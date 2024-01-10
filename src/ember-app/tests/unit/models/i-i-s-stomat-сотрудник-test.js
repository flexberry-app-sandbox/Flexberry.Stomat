import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stomat-сотрудник', 'Unit | Model | i-i-s-stomat-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-stomat-документы',
    'model:i-i-s-stomat-должность',
    'model:i-i-s-stomat-запись',
    'model:i-i-s-stomat-кабинет',
    'model:i-i-s-stomat-клиент',
    'model:i-i-s-stomat-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
