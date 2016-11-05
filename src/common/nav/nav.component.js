require('./nav.scss');

class NavController {
    static pages = [
        'home',
        'question',
        'brothers',
        'crowd',
        'jesus',
        'challenge',
        'selector'
    ];

    constructor($document, $state) {
        this.$document = $document;
        this.$state = $state;
    }


    currentPageIndex() {
        return NavController.pages.indexOf(this.$state.$current.name);
    }

    canGoBack() {
        if (this.currentPageIndex() > 1) {
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
        let previousPageName = NavController.pages[this.currentPageIndex()];
        let pageName = NavController.pages[this.currentPageIndex() - 1];
        this.$state.go(pageName);
        this.playAudio(previousPageName, pageName);
    }

    forward() {
        if (!this.canGoForward()) { return; }
        let previousPageName = NavController.pages[this.currentPageIndex()];
        let pageName = NavController.pages[this.currentPageIndex() + 1];
        this.$state.go(pageName);
        this.playAudio(previousPageName, pageName);
    }

    playAudio(previousPage, page) {
        let previousElement = this.$document[0].getElementById(`${previousPage}Audio`);
        let element = this.$document[0].getElementById(`${page}Audio`);
        let transitionElement = this.$document[0].getElementById('transitionAudio');
        if (previousElement) { previousElement.pause(); }
        if (element) {
            element.currentTime = 0;
            element.play();
        }
        if (transitionElement) {
            transitionElement.currentTime = 0.2;
            transitionElement.play();
        }
    }

    progress() {
        var percentage = ((this.currentPageIndex() - 1) / (NavController.pages.length - 2)) * 100;
        if (this.currentPageIndex() === 0) { percentage = 0; }
        return { width: percentage + '%' };
    }
}
const Nav = {
    template: require('./nav.html'),
    controller: NavController
};

export default angular.module('app.common.nav', [])
    .component('nav', Nav)
    .name;
