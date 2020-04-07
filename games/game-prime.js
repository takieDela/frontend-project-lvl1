const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isPrimeInteger = (integer) => {
  for (let i = 2; i < integer / 2; i += 1) {
    if (integer % i === 0 && integer !== i) {
      return false;
    }
  }
  return true;
};

const sayYesOrNo = (boolean) => {
  if (boolean) {
    return 'yes';
  }
  return 'no';
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  const number = getRandomInteger(1, 100);
  console.log(`Question: ${number}`);

  const rightAnswer = sayYesOrNo(isPrimeInteger(number));
  return rightAnswer;
};

export { rules, gameLogic };
