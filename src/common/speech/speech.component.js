require('./speech.scss');

class SpeechController {
    constructor($timeout, navService) {
        this.messageVisible = false;
        this.buttonVisible = true;
        this.visibleTransition = this.visible || true;
        this.navService = navService;
        if (this.visibleTransition) {
            this.visibleTransition = false;
            $timeout(() => {
                this.visibleTransition = true;
            }, 2000);
        }

        if (this.left) {
            this.leftAlign = `${this.left}em`;
        } else {
            this.leftAlign = "'auto'";
        }
    }

    showMessage() {
        this.messageVisible = true;
        //this.buttonVisible = false;
        this.navService.hideNav();
    }

    hideMessage() {
        this.messageVisible = false;
        this.navService.showNav();
    }
}
const Speech = {
    template: require('./speech.html'),
    controller: SpeechController,
    bindings: {
        'visible': '<',
        'left': '@',
        'message': '@'
    }
};

export default angular.module('app.common.speech', [])
    .component('speech', Speech)
    .name;
