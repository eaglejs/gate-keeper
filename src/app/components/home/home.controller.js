const map = new WeakMap();

const internal = function internal(object) {
    if (!map.has(object)) map.set(object, {});
    return map.get(object);
}

class HomeController {
	constructor($scope, $http, $state, userService, toolbarService) {
        this.name = 'home';
        this.$scope = $scope;
        this.$http = $http;
        this.$state = $state;
        this.userService = userService;

        this.model = userService.user;

        toolbarService.currentPage = "Home";

        this.init();
	}

    init () {
        let that = this;
        this.$scope.$on('$viewContentLoaded', () => { 
            that.model = that.userService.user;
        });
    }
}

HomeController.$inject = ['$scope', '$http', '$state', 'userService', 'toolbarService'];

export default HomeController;