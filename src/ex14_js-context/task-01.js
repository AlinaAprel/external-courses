class Calculator {
  constructor() {
    this.result = 0;
  }

  setState(num) {
    if (!(isNaN(num))) {
      this.result = num;
    }

    return this;
  }

  getResult() {
    return this.result;
  }

  reset() {
    this.result = 0;

    return this;
  }

  fetchData(callback) {
    this.callback = setTimeout(() => callback(500), 1000);
  }

  add(num) {
    let number = num;
    if (isNaN(number)) {
      number = 0;
    }

    this.result += number;

    return this;
  }

  subtract(num) {
    let number = num;

    if (isNaN(number)) {
      number = 0;
    }

    this.result -= number;

    return this;
  }

  divide(num) {
    let number = num;

    if (isNaN(number) || number === 0) {
      number = 0;
    }

    if (this.result === 0) {
      this.result = number;
      number = 1;
    }

    this.result /= number;

    return this;
  }

  multiply(num) {
    let number = num;

    if ((isNaN(number)) || number === 0) {
      number = 0;
    }

    if (this.result === 0) {
      this.result = number;
      number = 1;
    }

    this.result *= number;

    return this;
  }
}

const calculator = new Calculator();

module.exports = calculator;
