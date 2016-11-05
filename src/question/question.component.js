require('./question.scss');

class QuestionController {
    constructor() {
        this.welcomeMessage = 'Hello World';
    }
}

const question = {
    template: require('./question.html'),
    controller: QuestionController
};

export default angular.module('app.question.component', [])
    .component('question', question)
    .name;
