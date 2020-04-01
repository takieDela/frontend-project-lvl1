#!/usr/bin/env node
import {game} from '../src/index.js'


const makeRandomInteger = (min, max) =>  { 
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const makeRandomOperator= () => {
    const operators = ['+', '-', '*'];
    let randPosition = makeRandomInteger(0, 2);
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
    const numberOne = makeRandomInteger(1, 100);
    const numberTwo = makeRandomInteger(1, 100);
    const operator = makeRandomOperator();
    console.log(`Question: ${numberOne} ${operator} ${numberTwo}`);

    const rightAnswer = calculateRightAnswer(numberOne, numberTwo, operator);
    return rightAnswer;
};

game(rules, logic);