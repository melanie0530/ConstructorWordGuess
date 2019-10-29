var Letter = require('./letter');
const word = function (currentWord, convertWord, words, input, clearLog, isComplete) {
    this.currentWord = currentWord
    this.convertWord = convertWord;
    this.splitWord = splitWord;
    this.words = words;
    this.input = input;
    this.clearLog = clearLog;
    this.isComplete = isComplete
};
var compareArr = [];
var currentWord = [];
var letterArray = []
var letArr2 = [];
var correctLog = [];
var complete = 0;
var finalCheck1 = [];
var finalCheck2 = [];
word.prototype.currentWord = currentWord;
word.prototype.isComplete = false;
word.prototype.convertWord = function () {
    for (var i = 0; i < currentWord.length; i++) {
        for (var j = 0; j < currentWord[i].length; j++) {
            this.letterObj = new Letter(this.input, currentWord[i][j], false, this.check, this.placeholder)
            letterArray.push(this.letterObj)
        }
    }