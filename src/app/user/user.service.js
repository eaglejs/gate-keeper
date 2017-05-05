class UserService {
    constructor($http) {
        this.user = {};
        this.$http = $http;
        this.isRegistered;
    }

    checkLogin() {
        return this.$http({
            method: 'post',
            url: '/rest/isLoggedIn'
        }).then(function successCallback(response) {
            if (response.data.username) {
                return response.data;
            } else {
                return false;
            }
        }.bind(this), function errorCallback(error) {
            console.log(error);
            return false
        }.bind(this));
    }

    checkInitialRegistration() {
        return this.$http({
            method: 'post',
            url: '/rest/isRegistered'
        }).then(function successCallBack(response) {
            this.isRegistered = response.data.isRegistered;
        }.bind(this), function errorCallBack(error) {
            console.log(error);
        });
    }

    getUserInformation() {
        return this.$http({
            method: 'post',
            url: '/rest/getUserInformation'
        }).then(function successCallBack(response) {
            this.user = response.data;
        }.bind(this), function errorCallback(error) {
            console.log(error);
        });
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}

UserService.$inject = ["$http"];
export default UserService;