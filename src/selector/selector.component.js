class SelectorController {
    constructor() {
        this.welcomeMessage = 'Hello World';
    }
}
const Selector = {
    template: require('./selector.html'),
    controller: SelectorController
};

export default angular.module('app.selector.component', [])
    .component('selector', Selector)
    .name;
