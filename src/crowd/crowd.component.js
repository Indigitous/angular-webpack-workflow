class CrowdController {
    constructor() {
        this.welcomeMessage = 'Hello World';
    }
}
const Crowd = {
    template: require('./crowd.html'),
    controller: CrowdController
};

export default angular.module('app.crowd.component', [])
    .component('crowd', Crowd)
    .name;
