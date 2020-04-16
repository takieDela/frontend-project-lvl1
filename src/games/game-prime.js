import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let rightAnswer = 'yes';

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0 && number !== i) {
      rightAnswer = 'no';
    }
  }
  return rightAnswer;
};

const startGame = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;

  const rightAnswer = isPrime(number);
  return [rightAnswer, question];
};

const game = () => {
  engine(description, startGame);
};

export default game;
