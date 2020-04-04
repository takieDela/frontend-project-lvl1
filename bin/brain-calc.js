#!/usr/bin/env node
import { game } from '../src/index.js';
import {
  getRandomInteger,
  getRandomOperator,
  calculate,
  show
} from '../src/helpers.js';


const rules = 'What is the result of the expression?';

const gameLogic = () => {
  const numberOne = getRandomInteger(1, 100);
  const numberTwo = getRandomInteger(1, 100);
  const operator = getRandomOperator();

  show(`Question: ${numberOne} ${operator} ${numberTwo}`);

  const rightAnswer = calculate(numberOne, numberTwo, operator);
  return rightAnswer;
};

game(rules, gameLogic);
