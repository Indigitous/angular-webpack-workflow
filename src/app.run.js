/*@ngInject*/
export default function appRun($transitions, $q) {
    $transitions.onBefore({ to: () => {
    } }, () => {
        var redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        if (redirect && redirect !== location.href) {
            history.replaceState(null, null, redirect);
        }
        return $q.resolve();
    });
}
