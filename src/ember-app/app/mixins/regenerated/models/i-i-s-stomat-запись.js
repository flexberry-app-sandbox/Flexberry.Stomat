import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типОплаты: DS.attr('i-i-s-stomat-тип-оплаты'),
  кабинет: DS.belongsTo('i-i-s-stomat-кабинет', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-stomat-клиент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-stomat-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-stomat-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-stomat-запись.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-stomat-запись.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-stomat-запись.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-stomat-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-stomat-запись.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-stomat-запись.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-stomat-запись.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-stomat-запись.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-stomat-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    типОплаты: attr('Тип оплаты', { index: 4 }),
    комментарий: attr('Комментарий', { index: 5 }),
    сотрудник: belongsTo('i-i-s-stomat-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' }),
    кабинет: belongsTo('i-i-s-stomat-кабинет', 'Кабинет', {
      номерКабинета: attr('Номер кабинета', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'номерКабинета' }),
    клиент: belongsTo('i-i-s-stomat-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-stomat-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    типОплаты: attr('Тип оплаты', { index: 4 }),
    комментарий: attr('Комментарий', { index: 5 }),
    сотрудник: belongsTo('i-i-s-stomat-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true }),
    кабинет: belongsTo('i-i-s-stomat-кабинет', 'Номер кабинета', {
      номерКабинета: attr('Номер кабинета', { index: 7 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-stomat-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
