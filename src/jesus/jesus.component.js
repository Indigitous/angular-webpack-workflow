class JesusController {
    constructor() {
        this.welcomeMessage = 'Hello World';
    }
}
const Jesus = {
    template: require('./jesus.html'),
    controller: JesusController
};

export default angular.module('app.jesus', [])
    .component('jesus', Jesus)
    .name;
