#!/usr/bin/env node
import {game} from '../src/index.js'

const makeRamdomInteger = () =>  { // случайное число от 1 до 100
    let randInt = Math.floor(1 + Math.random() * 100);
    return randInt;
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
    const number = makeRamdomInteger();
    console.log(`Question: ${number}`);

    const rightAnswer = calculateRightAnswer(number);
    return rightAnswer;
};

game(rules, logic);