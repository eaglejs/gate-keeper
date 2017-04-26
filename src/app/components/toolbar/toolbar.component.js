import template from './toolbar.html';

import ToolbarController from './toolbar.controller';

import './toolbar.scss';

const toolbarComponent = {
  id: 'toolBar',
  restrict: 'E',
  bindings: {},
  template,
  controller: ToolbarController,
  controllerAs: 'toolbarCtrl'
};

export default toolbarComponent;