import template from './garage.html';

import garageController from './garage.controller';

import './garage.scss';

const garageComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller: garageController,
    controllerAs: 'garageCtrl'
}

export default garageComponent;