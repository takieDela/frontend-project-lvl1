import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let answer = true;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0 && number !== i) {
      answer = false;
    }
  }
  return answer;
};

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
  const question = String(number);

  const rightAnswer = returnYesOrNo(isPrime(number));
  return [rightAnswer, question];
};

const game = () => {
  engine(description, startGame);
};

export default game;
