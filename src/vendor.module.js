import getText from 'angular-gettext';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

export default angular.module('app.vendor', [
    getText,
    uiRouter,
    ngAnimate
]).name;
