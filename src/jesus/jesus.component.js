require('./jesus.scss');

class JesusController {
}
const Jesus = {
    template: require('./jesus.html'),
    controller: JesusController
};

export default angular.module('app.jesus.component', [])
    .component('jesus', Jesus)
    .name;
