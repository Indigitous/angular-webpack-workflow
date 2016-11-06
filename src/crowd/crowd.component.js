require('./crowd.scss');

class CrowdController {
}
const Crowd = {
    template: require('./crowd.html'),
    controller: CrowdController
};

export default angular.module('app.crowd.component', [])
    .component('crowd', Crowd)
    .name;
