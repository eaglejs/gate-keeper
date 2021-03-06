class RegisterController {
    constructor($http, $state, userService, toolbarService) {
        this.name = 'register';
        this.$http = $http;
        this.$state = $state;
        this.userService = userService;

        this.model = {
            email: '',
            name: '',
            username: '',
            password: '',
            confirmPassword: ''
        }

        toolbarService.currentPage = "Register";
    }

    register() {
        this.$http({
            method: 'post',
            url: '/rest/register',
            data: this.model,
        }).then(function successCallback(response) {
            this.$state.go('dashboard');
        }.bind(this), function errorCallback(response) {
            console.log('error');
        });
    }
}

RegisterController.$inject = ['$http', '$state', 'userService', 'toolbarService'];

export default RegisterController;