import engine from '../src/engine.js';
import getRandomInteger from '../src/getRandomInteger.js';


const isPrimeInteger = (integer) => {
  for (let i = 2; i < integer / 2; i += 1) {
    if (integer % i === 0 && integer !== i) {
      return false;
    }
  }
  return true;
};

const sayYesOrNo = (boolean) => {
  if (boolean) {
    return 'yes';
  }
  return 'no';
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  const number = getRandomInteger(1, 100);

  const question = `Question: ${number}`;

  const rightAnswer = sayYesOrNo(isPrimeInteger(number));
  return rightAnswer;
};

const startFunction = () => {
  engine(rules, gameLogic);
}

export default startFunction;
