import dashboardComponent from './dashboard.component';

let dashboardModule = angular.module('dashboard', [
	'ui.router'
]).config(['$stateProvider', ($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			component: 'dashboard',
			resolve: {
				user: ['userService', (userService) => {
					return userService.getUserInformation();
				}]
			}
		});
}]);

dashboardModule.component(dashboardComponent.id, dashboardComponent);

export default dashboardModule;