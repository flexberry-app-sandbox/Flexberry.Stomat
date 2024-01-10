import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stomat-документы', 'Unit | Serializer | i-i-s-stomat-документы', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-stomat-документы',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-stomat-тип-оплаты',

    'model:i-i-s-stomat-документы',
    'model:i-i-s-stomat-должность',
    'model:i-i-s-stomat-запись',
    'model:i-i-s-stomat-кабинет',
    'model:i-i-s-stomat-клиент',
    'model:i-i-s-stomat-оказание-услуг',
    'model:i-i-s-stomat-сотрудник',
    'model:i-i-s-stomat-услуга',
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
