const inquirer = require("inquirer");
const Word = require('./word');
var count = 0;
var guessesLeft = 13;
var answerLog = [];
var words = ['study', 'decide', 'prepare', 'begin', 'work', 'save','listen','smile','persist']
if (count === 0) {
    randomWord();
    startApp();
}