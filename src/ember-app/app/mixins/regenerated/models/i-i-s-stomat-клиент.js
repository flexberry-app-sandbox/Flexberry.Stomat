import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('number'),
  имя: DS.attr('string'),
  кодКлиента: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string'),
  документы: DS.hasMany('i-i-s-stomat-документы', { inverse: 'клиент', async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-stomat-клиент.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-stomat-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодКлиента: {
    descriptionKey: 'models.i-i-s-stomat-клиент.validations.кодКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-stomat-клиент.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-stomat-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-stomat-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  документы: {
    descriptionKey: 'models.i-i-s-stomat-клиент.validations.документы.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-stomat-клиент', {
    кодКлиента: attr('Код клиента', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    датаРождения: attr('Дата рождения', { index: 5 }),
    документы: hasMany('i-i-s-stomat-документы', 'Документы', {
      серияПаспорта: attr('Серия паспорта', { index: 0 }),
      номерПаспорта: attr('Номер паспорта', { index: 1 }),
      полис: attr('Полис', { index: 2 })
    })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-stomat-клиент', {
    кодКлиента: attr('Код клиента', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    датаРождения: attr('Дата рождения', { index: 5 })
  });
};
