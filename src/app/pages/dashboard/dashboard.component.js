import template from './dashboard.html';

import dashboardController from './dashboard.controller';

import './dashboard.scss';

const dashboardComponent = {
  template,
  controller: dashboardController,
  controllerAs: 'dashboardCtrl'
};

dashboardComponent.id = "dashboard";

export default dashboardComponent;