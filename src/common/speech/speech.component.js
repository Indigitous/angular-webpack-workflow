require('./speech.scss');

class SpeechController {
    constructor($timeout) {
        this.messageVisible = false;
        this.visibleTransition = this.visible || true;
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
