// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { add } from '../utilities.js';  


const addOne = document.getElementById('add-one');
const addTwo = document.getElementById('add-two');
const addButton = document.getElementById('add-button');
const addition = document.getElementById('addition');

addButton.addEventListener('click', () => {
    const x = Number(addOne.value);
    const y = Number(addTwo.value);
    const sum = add(x, y);
    addition.textContent = sum;
 

});

const subOne = document.getElementById('sub-one');
const subTwo = document.getElementById('sub-two');
const subButton = document.getElementById('sub-button');
const subtraction = document.getElementById('subtraction');

subButton.addEventListener('click', () => {
    const sub = Number(subOne.value) - Number(subTwo.value);
    subtraction.textContent = sub;
});

const multiOne = document.getElementById('multi-one');
const multiTwo = document.getElementById('multi-two');
const multiButton = document.getElementById('multi-button');
const multiplication = document.getElementById('multiplication');

multiButton.addEventListener('click', () => {
    const multiply = Number(multiOne.value) * Number(multiTwo.value);
    multiplication.textContent = multiply;
});

const divOne = document.getElementById('div-one');
const divTwo = document.getElementById('div-two');
const divButton = document.getElementById('div-button');
const division = document.getElementById('division');

divButton.addEventListener('click', () => {
    const divide = Number(divOne.value) / Number(divTwo.value);
    division.textContent = divide;
});