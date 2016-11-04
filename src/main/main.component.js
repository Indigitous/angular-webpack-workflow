class MainController {
    constructor() {
        this.welcomeMessage = 'Hello World';
    }
}
const Main = {
    template: require('./main.html'),
    controller: MainController
};

export default angular.module('app.main', [])
    .component('main', Main)
    .name;
