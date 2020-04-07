import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!\n');
  const user = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + user + '!');
  return user;
};

const getRightAnswer = (gameLogic) => {
  const rightAnswer = gameLogic();
  return rightAnswer;
};

const validationAnswer = (userAnswer, rightAnswer, user) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
Let's try again, ${user}!`);
  return false;
};

const game = (rules, gameLogic) => {
  const user = getName();
  console.log(rules);
  let correctAnswers = 0;

  while (correctAnswers !== 3) {
    const rightAnswer = getRightAnswer(gameLogic);
    const userAnswer = readlineSync.question('Your answer: ');

    if (validationAnswer(userAnswer, rightAnswer, user)) {
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
    }
  }

  return console.log(`Congratulations, ${user}!`);
};

export { game };
