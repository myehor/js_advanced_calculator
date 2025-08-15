'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const obj = {
    result: 0,

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    multiply(number) {
      this.result *= number;
    },

    divide(number) {
      this.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
      }

      callback.call(this, number);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
