require('./home.scss');

class HomeController {
}

const home = {
    template: require('./home.html'),
    controller: HomeController
};

export default angular.module('app.home.component', [])
    .component('home', home)
    .name;
