import homeComponent from './home.component';

let homeModule = angular.module('home', [
    'ui.router'
])

    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $stateProvider
            .state('home', {
                url: '/home',
                component: 'home',
                resolve: {
                    user: function ($http, $state, userService) {
                        return userService.getUserInformation();
                    }
                }
            });
    })
    .component('home', homeComponent)
    .name;

export default homeModule;