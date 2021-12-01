class Hangman {
  constructor(word) {
    this.word = word;
    // сколько ошибок еще можно допустить
    this.errors = 6;
    this.wrongLetters = [];
    this.result = '_'.repeat(this.word.length);
    this.result = this.result.split('');
    this.is = false;
  }

  guess(letter) {
    if (this.errors !== 0) {
      const wordArray = this.word.split('');
      this.is = false;
      wordArray.forEach((elem) => {
        if (elem === letter) {
          this.is = true;
          let index;
          if (wordArray.lastIndexOf(elem) !== wordArray.indexOf(elem)
          && this.result[wordArray.indexOf(elem)] === elem) {
            index = wordArray.lastIndexOf(elem);
          } else {
            index = wordArray.indexOf(elem);
          }

          this.result[index] = letter;
        }
      });
      if (this.result.join('') === this.word) {
        return 'You won!';
      }
      if (this.is === false) {
        this.errors -= 1;
        this.wrongLetters.push(letter);
        return `wrong letter, errors left ${this.errors} | ${this.wrongLetters}`;
      }
      return this.result.join('');
    }

    return 'You lose!';
  }

  getGuessedString() {
    return this.result.join('');
  }

  getErrorsLeft() {
    return this.errors;
  }

  getWrongSymbols() {
    return this.wrongLetters;
  }

  getStatus() {
    return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`;
  }

  startAgain(word) {
    this.word = word;
    this.errors = 6;
    this.wrongLetters = [];
    this.result = '_'.repeat(this.word.length);
    this.result = this.result.split('');
    this.is = false;
  }
}

const hangman = new Hangman('webpurple');
console.log(hangman.guess('w'));
console.log(hangman.guess('e'));
console.log(hangman.guess('p'));
console.log(hangman.getGuessedString());
module.exports = hangman;
