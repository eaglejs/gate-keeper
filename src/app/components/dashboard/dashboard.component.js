import template from './dashboard.html';

import dashboardController from './dashboard.controller';

import './dashboard.scss';

const dashboardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: dashboardController,
  controllerAs: 'dashboardCtrl'
};

export default dashboardComponent;