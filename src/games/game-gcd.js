import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (numberOne, numberTwo) => {
  const max = Math.max(numberOne, numberTwo);
  const min = Math.min(numberOne, numberTwo);

  let rightAnswer = 1;
  for (let i = 1; i <= max / 2; i += 1) {
    if (max % i === 0 && min % i === 0) {
      rightAnswer = i;
    }
  }

  return rightAnswer;
};

const startGame = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const question = `${numberOne} ${numberTwo}`;

  const rightAnswer = findGCD(numberOne, numberTwo);
  return [String(rightAnswer), question];
};

const game = () => {
  engine(description, startGame);
};

export default game;
