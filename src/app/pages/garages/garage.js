import garageComponent from './garage.component';
import garageService from './garage.service';

let garageModule = angular.module('garage', [
	'ui.router'
]).config(['$stateProvider', ($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('garage', {
			url: '/garage-manager',
			component: 'garage',
			resolve: {
				user: ['userService', (userService) => {
					return userService.getUserInformation();
				}]
			}
		})

}]);
garageModule.service(garageService.id, garageService);
garageModule.component('garage', garageComponent);

export default garageModule;