#!/usr/bin/env node
import {game} from '../src/index.js'

const makeRamdomInteger = () =>  { // случайное число от 1 до 100
    let randInt = Math.floor(1 + Math.random() * 100);
    return randInt;
};

const isEvenInteger = (integer) => integer % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const logic = () => {
    const number = makeRamdomInteger();
    console.log('Question: ' + randInt);
    if (isEvenInteger(number)) {
        return 'yes';
    } else {
        return 'no';
    }
};

game(rules, logic);