import content from './content/content.component';
import nav from './nav/nav.component';
import navService from './nav/nav.service';
import speech from './speech/speech.component';

export default angular.module('app.common', [
    content,
    nav,
    navService,
    speech
]).name;
