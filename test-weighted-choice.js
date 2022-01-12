// Author: Mitch Allen
// File: test-weighted-choice.js

import { weightedChoice } from './weighted-choice.js';

function testWeightedChoice(source = {}) {

    console.log('\nSOURCE:');
    console.log(source);

    // define the number of dice rolls
    const LIMIT = 100;

    // create an array filled with dice rolls
    let arr = Array.from({ length: LIMIT }, () => weightedChoice(source));

    // log the generated dice rolls
    console.log(arr);

    // count the occurences of each roll result
    let occurrences = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

    // log a summary of the occurences
    console.log('\OCCURRENCES:');
    console.log(occurrences);
}

testWeightedChoice({
    "A": 0.25,
    "B": 0.50,
    "C": 0.25,
});

testWeightedChoice({
    "A": 0.50,
    "B": 0.25,
    "C": 0.25,
});

testWeightedChoice({
    "A": 0.50,
    "B": 0.35,
    "C": 0.10,
    "D": 0.10,
});

testWeightedChoice({
    "#000000": 0.50,
    "#FFFFFF": 0.35,
    "#FF0000": 0.10,
    "#0000FF": 0.10,
});