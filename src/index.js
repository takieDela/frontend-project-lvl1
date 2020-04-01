import readlineSync from 'readline-sync';

const setUserName = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  return userName;
};

const showGameRules = (rules) => {
  console.log(rules);
};

const getQuestion = (logic) => {
  const rightAnswer = logic();
  return rightAnswer;
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const validation = (userAnswer, rightAnswer, userName) => {
  if (userAnswer == rightAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
Let's try again, ${userName}!`);
    return false;
  }
};

const game = (rules, logic) => {
  const userName = setUserName();
  showGameRules(rules);
  let correctAnswers = 0;
  
  while (correctAnswers !== 3) {
    const rightAnswer = getQuestion(logic);
    const userAnswer = getUserAnswer();
    if (validation(userAnswer, rightAnswer, userName)) {
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export {game};
