require('./content.scss');

class ContentController {
    constructor($state) {
        this.$state = $state;
    }

    route() {
        return this.$state.$current.name;
    }
}
const Content = {
    template: require('./content.html'),
    controller: ContentController
};

export default angular.module('app.common.content', [])
    .component('content', Content)
    .name;
