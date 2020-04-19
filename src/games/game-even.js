import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const returnYesOrNo = (expression) => {
  let answer;
  if (expression === true) {
    answer = 'yes';
  }
  if (expression === false) {
    answer = 'no';
  }
  return answer;
};

const startGame = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const rightAnswer = returnYesOrNo(isEven(number));

  return [rightAnswer, question];
};

const game = () => {
  engine(description, startGame);
};

export default game;
