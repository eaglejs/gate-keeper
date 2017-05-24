const map = new WeakMap();

const internal = function internal(object) {
    if (!map.has(object)) map.set(object, {});
    return map.get(object);
}

class garageController {
    constructor($scope, $http, $state, userService, toolbarService) {
        this.name = 'garage';
        this.$scope = $scope;
        this.$http = $http;
        this.$state = $state;
        this.userService = userService;

        toolbarService.currentPage = 'Garage Manager';

        this.init();
    }

    init () {
        this.$scope.$on('$viewContentLoaded', () => { 
            this.model = this.userService.user;
        }.bind(this));
    }
}

garageController.$inject = ['$scope', '$http', '$state', 'userService', 'toolbarService', 'garageService']

export default garageController;