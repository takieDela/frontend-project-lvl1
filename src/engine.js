import readlineSync from 'readline-sync';

const validationAnswer = (userAnswer, rightAnswer) => userAnswer === rightAnswer;

const engine = (rules, startFunction) => {
  console.log('Welcome to the Brain Games!\n');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, '${user}'!'`);
  console.log(rules);

  let correctAnswers = 0;

  while (correctAnswers !== 3) {
    const [rightAnswer, question] = startFunction();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (validationAnswer(userAnswer, rightAnswer, user)) { 
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      correctAnswers = 0;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
Let's try again, ${user}!`);
    }
  }

  return console.log(`Congratulations, ${user}!`);
};

export default engine;
