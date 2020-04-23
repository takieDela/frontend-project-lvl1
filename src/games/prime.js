import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let answer = true;
  if (number < 2) {
    answer = false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0 && number !== i) {
      answer = false;
    }
  }
  return answer;
};

const generateGameData = () => {
  const number = getRandomNumber(1, 100);
  const question = number;

  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [rightAnswer, String(question)];
};

const startGame = () => {
  engine(description, generateGameData);
};

export default startGame;
