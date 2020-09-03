import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = numberTwo ? Big(numberTwo) : null;

  switch (operation) {
    case '+':
      return num1.plus(num2).toString();
    case '-':
      return num1.minus(num2).toString();
    case '*':
      return num1.times(num2).toString();
    case '/':
      if (num2 > 0) return num1.div(num2).toString();
      return 'Zero division not allowed.';

    case '%':
      if (!num2) return num1.times(num2).div(100).toString();
      return num1.div(100).toString();
    default:
      return 'Operation not allowed';
  }
}

export default operate;
