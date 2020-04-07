const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randOperatorPosition = getRandomInteger(0, 2);
  return operators[randOperatorPosition];
};

const calculate = (numberOne, numberTwo, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
  }
};


const rules = 'What is the result of the expression?';

const gameLogic = () => {
  const numberOne = getRandomInteger(1, 100);
  const numberTwo = getRandomInteger(1, 100);
  const operator = getRandomOperator();

  console.log(`Question: ${numberOne} ${operator} ${numberTwo}`);
  console.log(operator)
  const rightAnswer = calculate(numberOne, numberTwo, operator);
  return rightAnswer;
};

export { rules, gameLogic };
