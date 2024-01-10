import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Stomat',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Stomat',
          title: 'Stomat'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
