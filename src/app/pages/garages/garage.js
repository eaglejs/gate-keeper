import garageComponent from './garage.component';
import garageService from './garage.service';

let garageModule = angular.module('garage', [
    'ui.router'
])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $stateProvider
            .state('garage', {
                url: '/garage-manager',
                component: 'garage',
                resolve: {
                    user: ($http, $state, userService) => {
                        return userService.getUserInformation();
                    }
                }
            })

    })
    .service(garageService.id, garageService)
    .component('garage', garageComponent)
    .name;

export default garageModule;