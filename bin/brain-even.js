#!/usr/bin/env node
import { game } from '../src/index.js';
import {
  getRandomInteger,
  isEvenInteger,
  sayYesOrNo,
  show
} from '../src/helpers.js';


const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = () => {
  const number = getRandomInteger(1, 100);
  show(`Question: ${number}`);

  const rightAnswer = sayYesOrNo(isEvenInteger(number));
  return rightAnswer;
};

game(rules, gameLogic);
