require('./selector.scss');

class SelectorController {
    constructor(navService) {
        navService.hideNav();
    }
}
const Selector = {
    template: require('./selector.html'),
    controller: SelectorController
};

export default angular.module('app.selector.component', [])
    .component('selector', Selector)
    .name;
