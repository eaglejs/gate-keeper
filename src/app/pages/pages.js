import Dashboard from './dashboard/dashboard';
import Garage from './garages/garage';
import Register from './register/register';
import Login from './login/login';
import Toolbar from './toolbar/toolbar';

let pagesModule = angular.module('app.pages', [
    Dashboard.name,
    Garage.name,
    Register.name,
    Login.name,
    Toolbar.name
]);

export default pagesModule;
