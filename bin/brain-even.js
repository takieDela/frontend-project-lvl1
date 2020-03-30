#!/usr/bin/env node
import { greeting } from '../src/index.js';
import readlineSync from 'readline-sync';

const makeRamdomInteger = () =>  {
    // случайное число от 1 до 100
    let rand = 1 + Math.random() * 100;
    let randFloor = Math.floor(rand);
    console.log('Question: ' + randFloor);
    return randFloor;
};

const isEvenInteger = (integer) => integer % 2 === 0;

const userInput = () => {
    const userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
};

const userInputCheck = (userAnswer, userName, isEvenIntegerAnswer) => {
    const userAnsweredYes = userAnswer === 'yes';
    const userAnsweredNo = userAnswer === 'no';
    const correctAnswer = isEvenIntegerAnswer ? 'yes' : 'no';
    if ((userAnsweredYes && isEvenIntegerAnswer) || (userAnsweredNo && !isEvenIntegerAnswer)) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${userName}!`);
        return false;
    }
};

const evenGame = () => {
    const userName = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let numberOfWins = 0;
    while (numberOfWins !== 3) {
        let randomInteger = makeRamdomInteger();
        let userAnswer = userInput();
        if (userInputCheck(userAnswer, userName, isEvenInteger(randomInteger))) {
            numberOfWins += 1;
        } else {
            numberOfWins = 0;
        }
    }
    return console.log(`Congratulations, ${userName}!`)
};

evenGame()