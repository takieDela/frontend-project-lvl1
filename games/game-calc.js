import engine from '../src/engine.js';
import getRandomInteger from '../src/getRandomInteger.js';


const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randOperatorPosition = getRandomInteger(0, 2);
  return operators[randOperatorPosition];
};

const calculate = (numberOne, numberTwo, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    default:
  }
  return result;
};


const rules = 'What is the result of the expression?';

const gameLogic = () => {
  const numberOne = getRandomInteger(1, 100);
  const numberTwo = getRandomInteger(1, 100);
  const operator = getRandomOperator();

  console.log(`Question: ${numberOne} ${operator} ${numberTwo}`);
  const rightAnswer = calculate(numberOne, numberTwo, operator);
  return String(rightAnswer);
};

const startFunction = () => {
  engine(rules, gameLogic);
}

export default startFunction;
