// import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import UserService from './user/user.service';

angular.module('app', [
    'ngMaterial',
    'ngMessages',
    'ui.router',
    // Common,
    Components
])
    .config(($locationProvider, $mdThemingProvider, $httpProvider) => {
        "ngInject";

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();

        // $locationProvider.html5Mode(true).hashPrefix('!');
    })

    .component('app', AppComponent)
    .service('userService', UserService)
    .run(($transitions, $location, $rootScope, $state, $timeout, userService) => {
        // enumerate routes that don't need authentication
        let routesThatDontRequireAuth = ['/login', '/register'];
        let routesAfterInitialSignup = ['/login'];

        // check if current location matches route  
        let routeIsClean = (route, routeList) => {
            let isMatch = false;
            _.forEach(routeList, function (item) {
                if (item === $location.url()) {
                    isMatch = true;
                };
            });

            return isMatch;
        };

        $rootScope.$on("$locationChangeStart", (event) => {

            userService.checkInitialRegistration().then(() => {
                if (userService.isRegistered) {
                    userService.checkLogin().then((user) => {
                        if (routeIsClean($location.url(), routesAfterInitialSignup) && user) {
                            event.preventDefault();
                            $timeout(() => {
                                $location.path('/home');
                            }, 0);
                        } else if (!routeIsClean($location.url(), routesAfterInitialSignup) && !user) {
                            event.preventDefault();
                            $timeout(() => {
                                $location.path('/login');
                            }, 0);
                        }
                    });
                } else {
                    $timeout(() => {
                        $location.path('/register');
                    }, 0);
                }
            });

        });
    });