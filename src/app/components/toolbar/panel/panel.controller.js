class PanelController {

    constructor (mdPanelRef, $http, $state, userService) {
        this.mdPanelRef = mdPanelRef;
        this.$http = $http;
        this.$state = $state;
        this.userService = userService;
    }

    closeMenu() {
        this.mdPanelRef && this.mdPanelRef.close();
    };

    handleTask(task) {
        if (task) {
            this[task]();
        }
        this.closeMenu();
    }

    register() {
        this.$state.go('register');
    }

    logout() {
        this.$http({
            url: '/rest/logout',
            method: 'get'
        }).then(function successCallback(response) {
            this.userService.user = {};
            this.$state.go('login');
        }.bind(this), function errorCallback(error) {
            console.log(error);
        });;
    }
}

export default PanelController;