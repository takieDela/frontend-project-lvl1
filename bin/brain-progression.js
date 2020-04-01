#!/usr/bin/env node
import {game} from '../src/index.js'


const makeRandomInteger = (min, max) =>  { // случайное число от 1 до 100
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const makeRandomProgression = (firstNumber, difference) => {
    const randomProgression = [];

    for (let i = 0; i < 10; i += 1) {
        let number = firstNumber + i * difference;
        randomProgression.push(number)
    }

    return randomProgression;
};

const calculateRightAnswer = (progression, randomPosition) => {
    const rightAnswer = progression[randomPosition];
    progression[randomPosition] = '..';
    
    return rightAnswer;
};

const rules = 'What number is missing in the progression?';

const logic = () => {
    const firstNumber = makeRandomInteger(-50, 50);
    const difference = makeRandomInteger(-5, 5);
    const progression = makeRandomProgression(firstNumber, difference);

    const randomPosition = makeRandomInteger(0, 9);
    const rightAnswer = calculateRightAnswer(progression, randomPosition)

    console.log(`Question: ${progression.join(' ')}`);

    return rightAnswer;
};

game(rules, logic);