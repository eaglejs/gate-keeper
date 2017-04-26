import template from './register.html';

import RegisterController from './register.controller';

import './register.scss';

const registerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: RegisterController,
  controllerAs: 'registerCtrl'
};

export default registerComponent;