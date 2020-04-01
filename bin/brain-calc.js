#!/usr/bin/env node
import {game} from '../src/index.js'


const makeRamdomInteger = () =>  { // случайное число от 1 до 100
    let randInt = Math.floor(1 + Math.random() * 100);
    return randInt;
};

const makeRamdomOperator= () => {
    const operators = ['+', '-', '*'];
    let randPosition = Math.floor(0 + Math.random() * 3);
    return operators[randPosition];
};

const calculateRightAnswer = (numberOne, numberTwo, operator) => {
    switch(operator) {
        case '+' :
            return numberOne + numberTwo;
        case '-' :
            return numberOne - numberTwo;
        case '*' :
            return numberOne * numberTwo;
    }
};

const rules = 'What is the result of the expression?';

const logic = () => {
    const numberOne = makeRamdomInteger();
    const numberTwo = makeRamdomInteger();
    const operator = makeRamdomOperator();
    console.log(`Question: ${numberOne} ${operator} ${numberTwo}`);

    const rightAnswer = calculateRightAnswer(numberOne, numberTwo, operator);
    return rightAnswer;
};

game(rules, logic);