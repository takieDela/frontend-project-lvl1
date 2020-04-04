const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randOperatorPosition = getRandomInteger(0, 2);
  return operators[randOperatorPosition];
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

const hideRandomProgressionMember = (progression, rightAnswer) => {
  const hideMemberPosition = progression.indexOf(rightAnswer);
  progression[hideMemberPosition] = '..';
};

const calculate = (numberOne, numberTwo, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = numberOne + numberTwo;
    case '-':
      result = numberOne - numberTwo;
    case '*':
      result = numberOne * numberTwo;
  }
  return result;
};

const calculateGCD = (numberOne, numberTwo) => {
  const max = Math.max(numberOne, numberTwo);
  const min = Math.min(numberOne, numberTwo);
  let rightAnswer = 1;
  for (let i = 1; i <= max / 2; i += 1) {
    if (max % i === 0 && min % i === 0) {
      rightAnswer = i;
    }
  }
  return rightAnswer;
};

const show = (text) => console.log(text);

const isEvenInteger = (integer) => integer % 2 === 0;

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


export {
  getRandomInteger,
  getRandomOperator,
  getRandomProgression,
  getRandomProgressionMember,
  hideRandomProgressionMember,
  calculate,
  calculateGCD,
  show,
  isEvenInteger,
  isPrimeInteger,
  sayYesOrNo
};
