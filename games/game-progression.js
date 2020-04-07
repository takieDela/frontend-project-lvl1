import {
  getRandomInteger,
  getRandomProgression,
  getRandomProgressionMember,
  hideRandomProgressionMember,
  show
} from '../src/helpers.js';


const rules = 'What number is missing in the progression?';

const gameLogic = () => {
  const firstNumber = getRandomInteger(-50, 50);
  const difference = getRandomInteger(-5, 5);
  const progression = getRandomProgression(firstNumber, difference, 10);

  const rightAnswer = getRandomProgressionMember(progression);
  hideRandomProgressionMember(progression, rightAnswer);

  const progressionStr = progression.join(' ');
  show(`Question: ${progressionStr}`);

  return rightAnswer;
};

export { rules, gameLogic };
