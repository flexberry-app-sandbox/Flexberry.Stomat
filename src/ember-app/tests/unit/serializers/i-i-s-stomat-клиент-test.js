import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stomat-клиент', 'Unit | Serializer | i-i-s-stomat-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-stomat-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
