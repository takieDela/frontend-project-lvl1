import engine from '../src/engine.js';
import getRandomInteger from '../src/getRandomInteger.js';


const calculateGCD = (numberOne, numberTwo) => {
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

const rules = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const numberOne = getRandomInteger(1, 100);
  const numberTwo = getRandomInteger(1, 100);
  console.log(`Question: ${numberOne} ${numberTwo}`);

  const rightAnswer = calculateGCD(numberOne, numberTwo);
  return String(rightAnswer);
};

const startFunction = () => {
  engine(rules, gameLogic);
}

export default startFunction;
