class RegisterController {
    constructor($http, $state, userService) {
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
    }

    register() {
        this.$http({
            method: 'post',
            url: '/rest/register',
            data: this.model,
        }).then(function successCallback(response) {
            this.$state.go('home');
        }.bind(this), function errorCallback(response) {
            console.log('error');
        });
    }
}

RegisterController.$inject = ['$http', '$state', 'userService'];

export default RegisterController;