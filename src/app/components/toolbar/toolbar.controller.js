import PanelController from './panel/panel.controller';
import PanelTemplate from './panel/panel.html';

class toolbarController {
    constructor($mdPanel, $http, userService) {
        this.name = 'toolbar';
        this.$mdPanel = $mdPanel;
        this.$http = $http;
        this.userService = userService;
        this.more = {
            name: 'more',
            items: [
                {
                    name: 'Account',
                    click: ''
                },
                {
                    name: 'Add Users',
                    click: 'register'
                },
                {
                    name: 'Sign Out',
                    click: 'logout'
                }
            ]
        };

        $mdPanel.newPanelGroup('menus', {
            maxOpen: 3
        });
    }

    showToolbarMenu($event, menu) {
        let template = this.menuTemplate;

        let position = this.$mdPanel.newPanelPosition()
            .relativeTo($event.srcElement)
            .addPanelPosition(
            this.$mdPanel.xPosition.ALIGN_START,
            this.$mdPanel.yPosition.BELOW
            );

        let config = {
            id: 'toolbar_' + menu.name,
            attachTo: angular.element(document.body),
            controller: PanelController,
            controllerAs: 'panelCtrl',
            template: PanelTemplate,
            position: position,
            panelClass: 'menu-panel-container',
            locals: {
                items: menu.items
            },
            openFrom: $event,
            focusOnOpen: false,
            clickOutsideToClose: true,
            zIndex: 100,
            propagateContainerEvents: true,
            groupName: ['toolbar', 'menus']
        };

        this.$mdPanel.open(config);

    };


}

toolbarController.$inject = ['$mdPanel', '$http', 'userService'];

export default toolbarController;