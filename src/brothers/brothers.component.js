require('./brothers.scss');

class BrothersController {
    constructor() {
        this.bubbleId = 0;
        this.bubbles = [true];
    }

    nextBubble() {
        this.bubbleId += 1;
        this.bubbles[this.bubbleId] = true;
    }
}
const Brothers = {
    template: require('./brothers.html'),
    controller: BrothersController
};

export default angular.module('app.brothers.component', [])
    .component('brothers', Brothers)
    .name;
