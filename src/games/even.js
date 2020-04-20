import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';
import returnYesOrNo from '../returnYesOrNo.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const rightAnswer = returnYesOrNo(isEven(number));

  return [rightAnswer, question];
};

const startGame = () => {
  engine(description, generateGameData);
};

export default startGame;
