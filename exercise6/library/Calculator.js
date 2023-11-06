class Calculator {
  constructor() {
    // this.id = Date.now();
  }

  #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`);
  };

  //add
  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }
  //subract
  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }
  //multiply
  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }
  //divide
  divide(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }
}

module.exports = Calculator;
