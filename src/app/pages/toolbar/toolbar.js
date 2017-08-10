import ToolbarComponent from './toolbar.component';
import ToolbarService from './toolbar.service';

let toolbarModule = angular.module('toolbar', [
    'ui.router'
])
    .service(ToolbarService.id, ToolbarService)
    .component(ToolbarComponent.id, ToolbarComponent)
    .name;

export default toolbarModule;