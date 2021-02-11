// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const addOne = document.getElementById('first-number');
const addTwo = document.getElementById('second-number');
const addButton = document.getElementById('add-button');
const solution = document.getElementById('solution');


addButton.addEventListener('click', () => {
    const sum = Number(addOne.value) + Number(addTwo.value);
    solution.textContent = sum;
});
