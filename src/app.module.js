import angular from 'angular';

import main from './main/index.module';
import brothers from './brothers/index.module';
import crowds from './crowd/index.module';
import jesus from './jesus/index.module';
import challenge from './challenge/index.module';
import selection from './selection/index.module';
import common from './common/index.module';
import appConfig from './app.config';
import appRun from './app.run';
import vendor from './vendor.module';

export default angular
    .module('app', [
        main,
        brothers,
        crowds,
        jesus,
        challenge,
        selection,
        common,
        vendor])
    .config(appConfig)
    .run(appRun)
    .name;
