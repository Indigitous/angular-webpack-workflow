class NavService {
    constructor() {
        this.hidden = false;
    }

    hideNav() {
        this.hidden = true;
    }

    showNav() {
        this.hidden = false;
    }
}

export default angular.module('app.nav.service', [])
    .service('navService', NavService).name;
