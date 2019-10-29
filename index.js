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
function randomWord() {
    var random = Math.floor(Math.random() * 6) + 1;
    if (random === 1) {
        Word.prototype.currentWord.push(words[0])
    }
    if (random === 2) {
        Word.prototype.currentWord.push(words[1])
    }
    if (random === 3) {
        Word.prototype.currentWord.push(words[2])
    }
    if (random === 4) {
        Word.prototype.currentWord.push(words[3])
    }
    if (random === 5) {
        Word.prototype.currentWord.push(words[4])
    }
    if (random === 6) {
        Word.prototype.currentWord.push(words[5])
    }
    if (Word.prototype.currentWord.length > 1) {
        Word.prototype.currentWord.shift();
    }
}
