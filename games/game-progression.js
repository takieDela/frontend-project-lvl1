import engine from '../src/engine.js';
import getRandomNumber from '../src/getRandomNumber.js';


const rules = 'What number is missing in the progression?';

const gameLogic = () => {
  const firstNumber = getRandomNumber(-50, 50);
  const difference = getRandomNumber(-5, 5);
  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    const number = firstNumber + i * difference;
    progression.push(number);
  }

  const randomPosition = getRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[randomPosition];
  progression[randomPosition] = '..';

  const question = `Question: ${progression.join(' ')}`;

  return [String(rightAnswer), question];
};


const game = () => {
  engine(rules, gameLogic);
};

export default game;
