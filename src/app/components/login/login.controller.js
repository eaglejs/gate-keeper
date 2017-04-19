const map = new WeakMap();

const internal = function internal(object) {
    if (!map.has(object)) map.set(object, {});
    return map.get(object);
}

class LoginController {
    constructor($http, $location, userService) {
        this.name = 'login';
        this.$http = $http;
        this.$location = $location;
        this.userService = userService;

        this.model = {
            username: '',
            password: ''
        }
    }

    login() {
        this.$http({
            method: 'post',
            data: this.model,
            url: '/rest/login',
        }).then(function successCallBack(response) {
            this.userService.setUser(response.data);
            this.$location.path('/home');
        }.bind(this), function errorCallback(error) {
            console.log(error);
        });
    }

}

LoginController.$inject = ['$http', '$location', 'userService'];

export default LoginController;