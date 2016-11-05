import angular from 'angular';

import home from './home/index.module';
import brothers from './brothers/index.module';
import crowds from './crowd/index.module';
import jesus from './jesus/index.module';
import challenge from './challenge/index.module';
import selector from './selector/index.module';
import common from './common/index.module';
import appConfig from './app.config';
import appRun from './app.run';
import vendor from './vendor.module';

require('./app.scss');

export default angular
    .module('app', [
        home,
        brothers,
        crowds,
        jesus,
        challenge,
        selector,
        common,
        vendor])
    .config(appConfig)
    .run(appRun)
    .name;
