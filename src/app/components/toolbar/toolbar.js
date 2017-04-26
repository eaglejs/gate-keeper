import ToolbarComponent from './toolbar.component';

let toolbarModule = angular.module('toolbar', [
    'ui.router'
])
    .component(ToolbarComponent.id, ToolbarComponent)
    .name;

export default toolbarModule;