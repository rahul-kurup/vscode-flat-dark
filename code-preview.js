export default class MathFns {
  /**
   * Program to find the LCM of two integers
   *
   * @param {number} num1
   * @param {number} num2
   * @returns lcm of args
   */
  static findLCM = (num1, num2) => {
    // higher number among number1 and number2 is stored in min
    let min = num1 > num2 ? num1 : num2;

    // while loop
    while (true) {
      if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
      }
      min++;
    }

    return min;
  };
}
