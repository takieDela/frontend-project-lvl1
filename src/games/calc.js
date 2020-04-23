import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const description = 'What is the result of the expression?';

const generateGameData = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${numberOne} ${operator} ${numberTwo}`;

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

const startGame = () => {
  engine(description, generateGameData);
};

export default startGame;
