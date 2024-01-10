import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-stomat-сотрудник', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-stomat-услуга', { inverse: null, async: false }),
  запись: DS.belongsTo('i-i-s-stomat-запись', { inverse: 'оказаниеУслуг', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-stomat-оказание-услуг.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-stomat-оказание-услуг.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-stomat-оказание-услуг.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-stomat-оказание-услуг.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
