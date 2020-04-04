#!/usr/bin/env node
import { game } from '../src/index.js';
import {
  getRandomInteger,
  calculateGCD,
  show
} from '../src/helpers.js';


const rules = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const numberOne = getRandomInteger(1, 100);
  const numberTwo = getRandomInteger(1, 100);
  show(`Question: ${numberOne} ${numberTwo}`);

  const rightAnswer = calculateGCD(numberOne, numberTwo);
  return rightAnswer;
};

game(rules, gameLogic);
