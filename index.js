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
function startApp() {
    count++
    guessesLeft--
    console.log('  ')

    console.log('Guesses left: ' + guessesLeft)
    console.log('  ')

    inquirer.prompt([
        {
            type: 'input',
            name: "guess",
            message: "Guess a letter: "
        }
    ]).then(answers => {
        Word.prototype.input = answers.guess
        Word.prototype.convertWord()
        answerLog.push(answers.guess)
        Word.prototype.answerLogWord = answerLog
    }).then(func => {
        if (count === 13 || Word.prototype.isComplete === true) {
            if (count === 12) {

                console.log('  ')


                console.log('Better Luck Next Time!!')
            } else if (Word.prototype.isComplete === true) {
                console.log('  ')

                console.log('Good Guess! ')
            }
            console.log('  ')

            console.log('Try Again !!!')
            randomWord();
            Word.prototype.clearLog();
            guessesLeft = 13;
            count = 0
            Word.prototype.isComplete = false
        }
    }).then(func => {
        if (count === 13 || Word.prototype.isComplete === true || count < 13) {
            startApp();
        }
    })
}