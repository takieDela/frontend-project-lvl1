import engine from '../src/engine.js'

const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomProgression = (firstNumber, difference, quantity) => {
  const randomProgression = [];
  for (let i = 0; i < quantity; i += 1) {
    const number = firstNumber + i * difference;
    randomProgression.push(number);
  }
  return randomProgression;
};

const getRandomProgressionMember = (progression) => {
  const randomPosition = getRandomInteger(0, progression.length - 1);
  const rightAnswer = progression[randomPosition];
  return rightAnswer;
};

const createQuestion = (progression, rightAnswer) => {
  const question = [...progression];
  question[progression.indexOf(rightAnswer)] = '..';

  return question;
};


const rules = 'What number is missing in the progression?';

const gameLogic = () => {
  const firstNumber = getRandomInteger(-50, 50);
  const difference = getRandomInteger(-5, 5);
  const progression = getRandomProgression(firstNumber, difference, 10);

  const rightAnswer = getRandomProgressionMember(progression);

  const question = createQuestion(progression, rightAnswer);
  console.log(`Question: ${question.join(' ')}`);

  return String(rightAnswer);
};

const startFunction = () => {
  engine(rules, gameLogic);
}

export default startFunction;
