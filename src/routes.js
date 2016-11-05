
export default class Routes {
    static config($stateProvider) {
        $stateProvider.state({
            name: 'main',
            url: '/',
            component: 'main'
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
            name: 'selection',
            url: '/selection',
            component: 'selection'
        });
    }
}
