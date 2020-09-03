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
      if (total) total *= -1;
      if (next) next *= -1;
      break;
    case '%':
    case '÷':
    case 'X':
    case '-':
    case '+':
      if (next && operation) {
        if (!total) break;
        total = operate(total, next, operation);
        next = null;
      }
      operation = name;
      break;
    case '.':
      if (total && !total.split('').includes('.')) total += '.';
      else if (next && !next.split('').includes('.')) next += '.';
      else next = `${0}.`;
      break;
    case '=':
      if (total && operation && next) total = operate(total, next, operation);
      next = null;
      operation = null;
      break;
    default:
      if (operation) next = next ? name : next + name;
      else total = total ? name : total + name;
      break;
  }

  return { total, next, operation };
}

export default calculate;
