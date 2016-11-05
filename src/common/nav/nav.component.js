class BrothersController {
    constructor() {
        this.welcomeMessage = 'Hello World';
    }
}
const Brothers = {
    template: require('./brothers.html'),
    controller: BrothersController
};

export default angular.module('app.brothers', [])
    .component('brothers', Brothers)
    .name;
