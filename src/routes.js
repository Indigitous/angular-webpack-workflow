
export default class Routes {
    static config($stateProvider) {
        $stateProvider.state({
            name: 'home',
            url: '/',
            component: 'home'
        }).state({
            name: 'brothers',
            url: '/brothers',
            component: 'brothers'
        }).state({
            name: 'challenge',
            url: '/challenge',
            component: 'challenge'
        }).state({
            name: 'crowd',
            url: '/crowd',
            component: 'crowd'
        }).state({
            name: 'jesus',
            url: '/jesus',
            component: 'jesus'
        }).state({
            name: 'selector',
            url: '/selector',
            component: 'selector'
        });
    }
}
