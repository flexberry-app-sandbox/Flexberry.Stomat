import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-stomat-должность-l');
  this.route('i-i-s-stomat-должность-e',
  { path: 'i-i-s-stomat-должность-e/:id' });
  this.route('i-i-s-stomat-должность-e.new',
  { path: 'i-i-s-stomat-должность-e/new' });
  this.route('i-i-s-stomat-запись-l');
  this.route('i-i-s-stomat-запись-e',
  { path: 'i-i-s-stomat-запись-e/:id' });
  this.route('i-i-s-stomat-запись-e.new',
  { path: 'i-i-s-stomat-запись-e/new' });
  this.route('i-i-s-stomat-кабинет-l');
  this.route('i-i-s-stomat-кабинет-e',
  { path: 'i-i-s-stomat-кабинет-e/:id' });
  this.route('i-i-s-stomat-кабинет-e.new',
  { path: 'i-i-s-stomat-кабинет-e/new' });
  this.route('i-i-s-stomat-клиент-l');
  this.route('i-i-s-stomat-клиент-e',
  { path: 'i-i-s-stomat-клиент-e/:id' });
  this.route('i-i-s-stomat-клиент-e.new',
  { path: 'i-i-s-stomat-клиент-e/new' });
  this.route('i-i-s-stomat-сотрудник-l');
  this.route('i-i-s-stomat-сотрудник-e',
  { path: 'i-i-s-stomat-сотрудник-e/:id' });
  this.route('i-i-s-stomat-сотрудник-e.new',
  { path: 'i-i-s-stomat-сотрудник-e/new' });
});

export default Router;
