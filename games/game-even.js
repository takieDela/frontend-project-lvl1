import engine from '../src/engine.js';
import getRandomInteger from '../src/getRandomInteger.js';


const isEvenInteger = (integer) => integer % 2 === 0;

const sayYesOrNo = (boolean) => {
  if (boolean) {
    return 'yes';
  }
  return 'no';
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';


const gameLogic = () => {
  const number = getRandomInteger(1, 100);
  const question = `Question: ${number}`;
  const rightAnswer = sayYesOrNo(isEvenInteger(number));

  return [ rightAnswer, question ];
};

const startFunction = () => {
  engine(rules, gameLogic);
}

export default startFunction;