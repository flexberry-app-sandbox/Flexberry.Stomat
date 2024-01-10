import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISStomatДолжностьLForm from './forms/i-i-s-stomat-должность-l';
import IISStomatЗаписьLForm from './forms/i-i-s-stomat-запись-l';
import IISStomatКабинетLForm from './forms/i-i-s-stomat-кабинет-l';
import IISStomatКлиентLForm from './forms/i-i-s-stomat-клиент-l';
import IISStomatСотрудникLForm from './forms/i-i-s-stomat-сотрудник-l';
import IISStomatДолжностьEForm from './forms/i-i-s-stomat-должность-e';
import IISStomatЗаписьEForm from './forms/i-i-s-stomat-запись-e';
import IISStomatКабинетEForm from './forms/i-i-s-stomat-кабинет-e';
import IISStomatКлиентEForm from './forms/i-i-s-stomat-клиент-e';
import IISStomatСотрудникEForm from './forms/i-i-s-stomat-сотрудник-e';
import IISStomatДокументыModel from './models/i-i-s-stomat-документы';
import IISStomatДолжностьModel from './models/i-i-s-stomat-должность';
import IISStomatЗаписьModel from './models/i-i-s-stomat-запись';
import IISStomatКабинетModel from './models/i-i-s-stomat-кабинет';
import IISStomatКлиентModel from './models/i-i-s-stomat-клиент';
import IISStomatОказаниеУслугModel from './models/i-i-s-stomat-оказание-услуг';
import IISStomatСотрудникModel from './models/i-i-s-stomat-сотрудник';
import IISStomatУслугаModel from './models/i-i-s-stomat-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-stomat-документы': IISStomatДокументыModel,
    'i-i-s-stomat-должность': IISStomatДолжностьModel,
    'i-i-s-stomat-запись': IISStomatЗаписьModel,
    'i-i-s-stomat-кабинет': IISStomatКабинетModel,
    'i-i-s-stomat-клиент': IISStomatКлиентModel,
    'i-i-s-stomat-оказание-услуг': IISStomatОказаниеУслугModel,
    'i-i-s-stomat-сотрудник': IISStomatСотрудникModel,
    'i-i-s-stomat-услуга': IISStomatУслугаModel
  },

  'application-name': 'Stomat',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Stomat',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Stomat',
          title: 'Stomat'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        stomat: {
          caption: 'Stomat',
          title: 'Stomat',
          'i-i-s-stomat-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-stomat-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-stomat-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-stomat-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-stomat-запись-l': {
            caption: 'Запись',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-stomat-должность-l': IISStomatДолжностьLForm,
    'i-i-s-stomat-запись-l': IISStomatЗаписьLForm,
    'i-i-s-stomat-кабинет-l': IISStomatКабинетLForm,
    'i-i-s-stomat-клиент-l': IISStomatКлиентLForm,
    'i-i-s-stomat-сотрудник-l': IISStomatСотрудникLForm,
    'i-i-s-stomat-должность-e': IISStomatДолжностьEForm,
    'i-i-s-stomat-запись-e': IISStomatЗаписьEForm,
    'i-i-s-stomat-кабинет-e': IISStomatКабинетEForm,
    'i-i-s-stomat-клиент-e': IISStomatКлиентEForm,
    'i-i-s-stomat-сотрудник-e': IISStomatСотрудникEForm
  },

});

export default translations;
