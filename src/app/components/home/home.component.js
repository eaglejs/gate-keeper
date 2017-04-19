import template from './home.html';

import HomeController from './home.controller';

import './home.scss';

const homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: HomeController,
  controllerAs: 'homeCtrl'
};

export default homeComponent;