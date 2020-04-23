import readlineSync from 'readline-sync';


const engine = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!\n');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, '${user}'!'`);
  console.log(description);

  let correctAnswer = 0;
  const maxRound = 3;

  for (let i = 0; i < maxRound; i += 1) {
    const [rightAnswer, question] = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      correctAnswer += 1;
      console.log('Correct!');
    } else {
      correctAnswer = 0;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
Let's try again, ${user}!`);
    }
  }

  if (correctAnswer === maxRound) {
    console.log(`Congratulations, ${user}!`);
  }
};

export default engine;
