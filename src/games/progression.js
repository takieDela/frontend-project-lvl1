import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const firstNumber = getRandomNumber(-50, 50);
  const difference = getRandomNumber(-5, 5);
  const progression = [];
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    const number = firstNumber + i * difference;
    progression.push(number);
  }

  const randomPosition = getRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[randomPosition];
  progression[randomPosition] = '..';

  const question = progression.join(' ');

  return [String(rightAnswer), question];
};


const startGame = () => {
  engine(description, generateGameData);
};

export default startGame;
