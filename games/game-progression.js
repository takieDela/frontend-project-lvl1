import engine from '../src/engine.js';
import getRandomInteger from '../src/getRandomInteger.js';


const rules = 'What number is missing in the progression?';

const gameLogic = () => {
  const firstNumber = getRandomInteger(-50, 50);
  const difference = getRandomInteger(-5, 5);
  const progression = [];
  
  for (let i = 0; i < 10; i += 1) {
    const number = firstNumber + i * difference;
    progression.push(number);
  }

  const randomPosition = getRandomInteger(0, progression.length - 1);
  const rightAnswer = progression[randomPosition];
  progression[randomPosition] = '..'

  const question = `Question: ${progression.join(' ')}`;

  return [String(rightAnswer), question];
};


const startFunction = () => {
  engine(rules, gameLogic);
}

export default startFunction;
