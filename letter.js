const Letter = function (input, character, guessed, check, placeholder) {
    this.input = input
    this.character = character
    this.guessed = guessed
    this.check = check
    this.placeholder = placeholder
};
Letter.prototype.placeholder = "_"
Letter.prototype.check = function () {
    if (this.input === this.character) {
        this.guessed = true;
    } else {
        this.guessed = false;
    }
}
module.exports = Letter