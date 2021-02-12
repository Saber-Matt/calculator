// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../utilities.js';
import { sub } from '../utilities.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 5;
    const sum = 9;

    const a = 4;
    const b = 5;
    const minus = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);
    const leftOver = sub(a, b);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
    expect.equal(leftOver, minus);
});