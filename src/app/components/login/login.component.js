import template from './login.html';

import LoginController from './login.controller';

import './login.scss';

const loginComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: LoginController,
  controllerAs: 'loginCtrl'
};

export default loginComponent;