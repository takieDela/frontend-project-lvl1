import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const rules = 'What is the result of the expression?';

const gameLogic = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `Question: ${numberOne} ${operator} ${numberTwo}`;

  let rightAnswer;
  switch (operator) {
    case '+':
      rightAnswer = numberOne + numberTwo;
      break;
    case '-':
      rightAnswer = numberOne - numberTwo;
      break;
    case '*':
      rightAnswer = numberOne * numberTwo;
      break;
    default:
  }

  return [String(rightAnswer), question];
};

const game = () => {
  engine(rules, gameLogic);
};

export default game;
