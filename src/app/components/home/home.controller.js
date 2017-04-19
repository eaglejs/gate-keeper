const map = new WeakMap();

const internal = function internal(object) {
    if (!map.has(object)) map.set(object, {});
    return map.get(object);
}

class HomeController {
	constructor($scope, $http, $state, userService) {
        this.name = 'home';
        this.$scope = $scope;
        this.$http = $http;
        this.$state = $state;
        this.userService = userService;

        this.model = userService.user;

        this.init();
	}

    init () {
        let that = this;
        this.$scope.$on('$viewContentLoaded', () => { 
            that.model = that.userService.user;
        });
    }

    logout () {
        this.$http({
            url: '/rest/logout',
            method: 'get'
        }).then( function successCallback(response) {
            this.userService.user = {};
            this.$state.go('login');
        }.bind(this), function errorCallback(error) {
            console.log(error);
        });;
    }
}

HomeController.$inject = ['$scope', '$http', '$state', 'userService'];

export default HomeController;