import {
  defineNamespace,
  Model as УслугаMixin
} from '../mixins/regenerated/models/i-i-s-stomat-услуга';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УслугаMixin, {
});

defineNamespace(Model);

export default Model;
