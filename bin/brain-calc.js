#!/usr/bin/env node
import {game} from '../src/index.js'


const makeRandomInteger = () =>  { // случайное число от 1 до 100
    let randInt = Math.floor(1 + Math.random() * 100);
    return randInt;
};

const makeRandomOperator= () => {
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
    const numberOne = makeRandomInteger();
    const numberTwo = makeRandomInteger();
    const operator = makeRandomOperator();
    console.log(`Question: ${numberOne} ${operator} ${numberTwo}`);

    const rightAnswer = calculateRightAnswer(numberOne, numberTwo, operator);
    return rightAnswer;
};

game(rules, logic);