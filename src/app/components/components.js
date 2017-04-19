import Home from './home/home';
import Register from './register/register';
import Login from './login/login';

let componentModule = angular.module('app.components', [
    Home,
    Register,
    Login
])
    .name;

export default componentModule;
