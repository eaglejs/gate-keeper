import uiRouter from 'angular-ui-router';
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
    .component('login', LoginComponent)
    .name;

export default loginModule;