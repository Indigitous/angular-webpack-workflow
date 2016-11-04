class SelectionController {
    constructor() {
        this.welcomeMessage = 'Hello World';
    }
}
const Selection = {
    template: require('./selection.html'),
    controller: SelectionController
};

export default angular.module('app.selection', [])
    .component('selection', Selection)
    .name;
