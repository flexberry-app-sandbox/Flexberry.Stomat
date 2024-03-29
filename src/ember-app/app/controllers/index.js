import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.stomat.caption'),
          title: i18n.t('forms.application.sitemap.stomat.title'),
          children: [{
            link: 'i-i-s-stomat-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-сотрудник-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-stomat-кабинет-l',
            caption: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-кабинет-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-stomat-клиент-l',
            caption: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-клиент-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-stomat-должность-l',
            caption: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-должность-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-stomat-запись-l',
            caption: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.stomat.i-i-s-stomat-запись-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})