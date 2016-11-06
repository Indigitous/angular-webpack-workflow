require('./speech.scss');

class SpeechController {
    constructor($timeout, navService) {
        this.messageVisible = false;
        this.navService = navService;
        if (this.left) {
            this.leftAlign = `${this.left}em`;
        } else {
            this.leftAlign = "'auto'";
        }

        if (this.right) {
            this.rightAlign = `${this.right}em`;
        } else {
            this.rightAlign = "'auto'";
        }
    }

    showMessage() {
        this.messageVisible = true;
        this.buttonVisible = false;
        this.navService.hideNav();
    }

    hideMessage() {
        this.messageVisible = false;
        this.navService.showNav();
        if (angular.isFunction(this.onClose)) {
            this.onClose();
        }
    }
}
const Speech = {
    template: require('./speech.html'),
    controller: SpeechController,
    bindings: {
        'buttonVisible': '<',
        'left': '@',
        'right': '@',
        'message': '@',
        'onClose': '&'
    }
};

export default angular.module('app.common.speech', [])
    .component('speech', Speech)
    .name;
