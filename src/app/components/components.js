import Dashboard from './dashboard/dashboard';
import Garage from './garages/garage';
import Register from './register/register';
import Login from './login/login';
import Toolbar from './toolbar/toolbar';

let componentModule = angular.module('app.components', [
    Dashboard,
    Garage,
    Register,
    Login,
    Toolbar
])
    .name;

export default componentModule;
