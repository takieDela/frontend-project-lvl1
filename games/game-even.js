const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isEvenInteger = (integer) => integer % 2 === 0;

const sayYesOrNo = (boolean) => {
  if (boolean) {
    return 'yes';
  }
  return 'no';
};


const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = () => {
  const number = getRandomInteger(1, 100);
  console.log(`Question: ${number}`);

  const rightAnswer = sayYesOrNo(isEvenInteger(number));
  return rightAnswer;
};

export { rules, gameLogic };
