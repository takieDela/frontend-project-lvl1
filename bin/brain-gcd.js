#!/usr/bin/env node
import {game} from '../src/index.js'


const makeRamdomInteger = () =>  { // случайное число от 1 до 100
    let randInt = Math.floor(1 + Math.random() * 100);
    return randInt;
};

const calculateRightAnswer = (numberOne, numberTwo) => {
    const max = Math.max(numberOne, numberTwo);
    const min = Math.min(numberOne, numberTwo);
    let rightAnswer = 1;
    for (let i = 1; i <= max / 2; i += 1 ) {
        if (max % i === 0 && min % i === 0) {
            rightAnswer = i;
        }
    };
    return rightAnswer;
};

const rules = 'Find the greatest common divisor of given numbers.';

const logic = () => {
    const numberOne = makeRamdomInteger();
    const numberTwo = makeRamdomInteger();
    console.log(`Question: ${numberOne} ${numberTwo}`);

    const rightAnswer = calculateRightAnswer(numberOne, numberTwo);
    return rightAnswer;
};

game(rules, logic);