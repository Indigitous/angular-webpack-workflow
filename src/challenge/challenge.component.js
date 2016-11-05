class ChallengeController {
    constructor() {
        this.welcomeMessage = 'Hello World';
    }
}
const Challenge = {
    template: require('./challenge.html'),
    controller: ChallengeController
};

export default angular.module('app.challenge.component', [])
    .component('challenge', Challenge)
    .name;
