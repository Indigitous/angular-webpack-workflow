require('./nav.scss');

class NavController {
    static pages = [
        'home',
        'brothers',
        'crowd',
        'jesus',
        'challenge',
        'selector'
    ];

    constructor($state) {
        this.$state = $state;
    }

    currentPageIndex() {
        return NavController.pages.indexOf(this.$state.$current.name);
    }

    canGoBack() {
        if (this.currentPageIndex() > 0) {
            return true;
        } else {
            return false;
        }
    }

    canGoForward() {
        if (this.currentPageIndex() < NavController.pages.length - 1) {
            return true;
        } else {
            return false;
        }
    }

    back() {
        if (!this.canGoBack()) { return; }
        this.$state.go(NavController.pages[this.currentPageIndex() - 1]);
    }

    forward() {
        if (!this.canGoForward()) { return; }
        this.$state.go(NavController.pages[this.currentPageIndex() + 1]);
    }
}
const Nav = {
    template: require('./nav.html'),
    controller: NavController
};

export default angular.module('app.common.nav', [])
    .component('nav', Nav)
    .name;
