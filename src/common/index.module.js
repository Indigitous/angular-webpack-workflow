import content from './content/content.component';
import nav from './nav/nav.component';
import speech from './speech/speech.component';

export default angular.module('app.common', [
    content,
    nav,
    speech
]).name;
