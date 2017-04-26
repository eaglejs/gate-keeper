import Home from './home/home';
import Register from './register/register';
import Login from './login/login';
import Toolbar from './toolbar/toolbar';

let componentModule = angular.module('app.components', [
    Home,
    Register,
    Login,
    Toolbar
])
    .name;

export default componentModule;
