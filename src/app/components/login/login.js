import uiRouter from '@uirouter/angularjs';
import LoginComponent from './login.component';

let loginModule = angular.module('login', [
    'ngMaterial',
    'ui.router'
])
    .config(($urlRouterProvider, $stateProvider) => {
        "ngInject";
        $stateProvider
            .state('login', {
                url: '/login',
                component: 'login'
            });
    })
    .controller('LeftCtrl', ($scope, $timeout, $mdSidenav, $log) => {
        $scope.close = () => {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then( () => {
                    $log.debug("close LEFT is done");
                });

        };
    })
    .component('login', LoginComponent)
    .name;

export default loginModule;