import readlineSync from 'readline-sync';
import { show } from './helpers.js';

const getName = () => {
  show('Welcome to the Brain Games!\n');
  const user = readlineSync.question('May I have your name? ');
  show('Hello, ' + user + '!');
  return user;
};

const getRightAnswer = (gameLogic) => {
  const rightAnswer = gameLogic();
  return rightAnswer;
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const validationAnswer = (userAnswer, rightAnswer, user) => {
  if (userAnswer === rightAnswer) {
    show('Correct!');
    return true;
  }
  show(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
Let's try again, ${user}!`);
  return false;
};

const game = (rules, gameLogic) => {
  const user = getName();
  show(rules);
  let correctAnswers = 0;

  while (correctAnswers !== 3) {
    const rightAnswer = getRightAnswer(gameLogic);
    const userAnswer = getUserAnswer();

    if (validationAnswer(userAnswer, rightAnswer, user)) {
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
    }
  }

  return show(`Congratulations, ${user}!`);
};

export { game };
