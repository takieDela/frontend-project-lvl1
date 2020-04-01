#!/usr/bin/env node
import {game} from '../src/index.js'

const makeRandomInteger = (min, max) =>  { 
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const isEvenInteger = (integer) => integer % 2 === 0;

const calculateRightAnswer = (number) => {
    if (isEvenInteger(number)) {
        return 'yes';
    } else {
        return 'no';
    }
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const logic = () => {
    const number = makeRandomInteger(1, 100);
    console.log(`Question: ${number}`);

    const rightAnswer = calculateRightAnswer(number);
    return rightAnswer;
};

game(rules, logic);