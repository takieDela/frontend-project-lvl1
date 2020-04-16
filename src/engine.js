import readlineSync from 'readline-sync';


const engine = (rules, game) => {
  console.log('Welcome to the Brain Games!\n');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, '${user}'!'`);
  console.log(rules);

  let correctAnswers = 0;
  let round = 0;
  const maxRound = 3;

  while (round !== maxRound) {
    const [rightAnswer, question] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      correctAnswers = 0;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
Let's try again, ${user}!`);
    }
    round += 1;
  }

  if (correctAnswers === maxRound) {
    console.log(`Congratulations, ${user}!`);
  }

  return;
};

export default engine;
