import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  return number % 2 === 0 ? 'yes' : 'no';
};

const startGame = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const rightAnswer = isEven(number);

  return [rightAnswer, question];
};

const game = () => {
  engine(description, startGame);
};

export default game;
