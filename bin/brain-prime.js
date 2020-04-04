#!/usr/bin/env node
import { game } from '../src/index.js';
import {
  getRandomInteger,
  isPrimeInteger,
  sayYesOrNo,
  show
} from '../src/helpers.js';


const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  const number = getRandomInteger(1, 100);
  show(`Question: ${number}`);

  const rightAnswer = sayYesOrNo(isPrimeInteger(number));
  return rightAnswer;
};

game(rules, gameLogic);
