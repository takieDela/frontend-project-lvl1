import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const rightAnswer = isEven(number) ? 'yes' : 'no';

  return [rightAnswer, question];
};

const startGame = () => {
  engine(description, generateGameData);
};

export default startGame;
