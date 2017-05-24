import dashboardComponent from './dashboard.component';

let dashboardModule = angular.module('dashboard', [
    'ui.router'
])

    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                component: 'dashboard',
                resolve: {
                    user: ($http, $state, userService) => {
                        return userService.getUserInformation();
                    }
                }
            });
    })
    .component('dashboard', dashboardComponent)
    .name;

export default dashboardModule;