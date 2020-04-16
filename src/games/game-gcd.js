import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const rules = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const question = `${numberOne} ${numberTwo}`;
  const max = Math.max(numberOne, numberTwo);
  const min = Math.min(numberOne, numberTwo);

  let rightAnswer = 1;
  for (let i = 1; i <= max / 2; i += 1) {
    if (max % i === 0 && min % i === 0) {
      rightAnswer = i;
    }
  }

  return [String(rightAnswer), question];
};

const game = () => {
  engine(rules, gameLogic);
};

export default game;
