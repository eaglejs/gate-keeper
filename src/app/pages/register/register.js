import registerComponent from './register.component';
import toolbarComponent from '../toolbar/toolbar.component';

let registerModule = angular.module('register', [
    'ui.router'
])

    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $stateProvider
            .state('register', {
                url: '/register',
                component: 'register',
                resolve: {
                    user: ['userService', (userService) => {
                        return userService.getUserInformation();
                    }]
                }
            });
            
        $urlRouterProvider.otherwise('/login');
    }])
    .component('register', registerComponent)
    .component('toolbar', toolbarComponent);

export default registerModule;