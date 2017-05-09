import PanelController from './panel/panel.controller';
import PanelTemplate from './panel/panel.html';

class toolbarController {
    constructor($mdPanel, $http, $location, $state, $timeout, $log, $mdSidenav, userService, toolbarService) {
        this.name = 'toolbar';
        this.$mdPanel = $mdPanel;
        this.$http = $http;
        this.$state = $state;
        this.$timeout = $timeout;
        this.$mdSidenav = $mdSidenav;
        this.$log = $log;
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
        this.toggleLeft = this.buildDelayedToggler('left');
        this.isOpenRight = function () {
            return $mdSidenav('right').isOpen();
        };

        this.currentPage = toolbarService.currentPage;

        $mdPanel.newPanelGroup('menus', {
            maxOpen: 3
        });
    }

    goToDashboard() {
        this.$state.go('home');
    }

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = this,
                args = Array.prototype.slice.call(arguments);
            this.$timeout.cancel(timer);
            timer = this.$timeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        }.bind(this);
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    buildDelayedToggler(navID) {
        return this.debounce(function () {
            // Component lookup should always be available since we are not using `ng-if`
            this.$mdSidenav(navID)
                .toggle()
                .then(function () {
                    this.$log.debug("toggle " + navID + " is done");
                }.bind(this));
        }.bind(this), 200);
    }

    buildToggler(navID) {
        return function () {
            // Component lookup should always be available since we are not using `ng-if`
            this.$mdSidenav(navID)
                .toggle()
                .then(function () {
                    this.$log.debug("toggle " + navID + " is done");
                }.bind(this));
        }.bind(this);
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

toolbarController.$inject = ['$mdPanel', '$http', '$location', '$state', '$timeout', '$log', '$mdSidenav', 'userService', 'toolbarService'];

export default toolbarController;