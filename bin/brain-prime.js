#!/usr/bin/env node
import {game} from '../src/index.js'

const makeRandomInteger = (min, max) =>  { 
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const isPrimeInteger = (integer) => {
    for (let i = 2; i < integer / 2; i += 1) {
        if (integer % i === 0) {
            return false;
        }
    }
    return true;
};

const calculateRightAnswer = (number) => {
    if (isPrimeInteger(number)) {
        return 'yes';
    } else {
        return 'no';
    }
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const logic = () => {
    const number = makeRandomInteger(1, 100);
    console.log(`Question: ${number}`);

    const rightAnswer = calculateRightAnswer(number);
    return rightAnswer;
};

game(rules, logic);