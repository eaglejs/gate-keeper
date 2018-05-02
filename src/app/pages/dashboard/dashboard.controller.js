const map = new WeakMap();

const internal = function internal(object) {
    if (!map.has(object)) map.set(object, {});
    return map.get(object);
}

class dashboardController {
	constructor($scope, $http, $state, userService, toolbarService) {
        this.name = 'dashboard';
        this.$scope = $scope;
        this.$http = $http;
        this.$state = $state;
        this.userService = userService;

        this.model = userService.user;

        toolbarService.currentPage = 'Dashboard';

        this.init();
	}

    init () {
        this.$scope.$on('$viewContentLoaded', () => { 
            this.model = this.userService.user;
        });
	}
	
	toggleGarageDoor () {
		this.$http({
            method: 'post',
            data: {toggleGarageDoor: true},
            url: '/rest/toggleGarageDoor',
        }).then(function successCallBack(response) {
            console.log(response.data.tasks);
        }.bind(this), function errorCallback(error) {
            console.log(error);
        });
	}
}

dashboardController.$inject = ['$scope', '$http', '$state', 'userService', 'toolbarService'];

export default dashboardController;