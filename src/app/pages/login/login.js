import uiRouter from '@uirouter/angularjs';
import LoginComponent from './login.component';

let loginModule = angular.module('login', [
	'ngMaterial',
	'ui.router'
]).config(['$stateProvider', ($stateProvider) => {
	"ngInject";
	$stateProvider
		.state('login', {
			url: '/login',
			component: 'login'
		});
}]);

loginModule.controller('LeftCtrl',['$scope', '$mdSidenav', '$log', ($scope, $mdSidenav, $log) => {
	$scope.close = () => {
		// Component lookup should always be available since we are not using `ng-if`
		$mdSidenav('left').close()
			.then(() => {
				$log.debug("close LEFT is done");
			});

	};
}]);

loginModule.component('login', LoginComponent);

export default loginModule;