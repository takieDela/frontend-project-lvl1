import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [rightAnswer, String(question)];
};

const startGame = () => {
  engine(description, generateGameData);
};

export default startGame;
