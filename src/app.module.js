import angular from 'angular';

import main from './main/main.component';
import brothers from './brothers/brothers.component';
import crowds from './crowd/crowd.component';
import jesus from './jesus/jesus.component';
import challenge from './challenge/challenge.component';
import selection from './selection/selection.component';

export default angular.module('app', [main, brothers, crowds, jesus, challenge, selection]).name;
