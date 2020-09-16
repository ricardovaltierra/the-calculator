import operate from './operate';

function calculate(calculator, name) {
  let { total, next, operation } = calculator;
  switch (name) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      if (total) {
        total *= -1;
        total = total.toString();
      }
      if (next) {
        next *= -1;
        next = next.toString();
      }
      break;
    case '%':
    case '÷':
    case 'X':
    case '-':
    case '+':
      if (next && operation) {
        total = operate(total, next, operation);
        next = null;
      }
      operation = name;
      break;
    case '.':
      if (next && !next.split('').includes('.')) next += '.';
      else if (total && !total.split('').includes('.')) total += '.';
      else total = `${0}.`;
      break;
    case '=':
      if (operation === '%' && next == null) next = 1;
      if (total && operation && next) total = operate(total, next, operation);
      next = null;
      operation = null;
      break;
    default:
      if (operation) next = next ? next + name : name;
      else total = total ? total + name : name;
      break;
  }

  return { total, next, operation };
}

export default calculate;
