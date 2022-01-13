// Author: Mitch Allen
// File: weighted-choice.js

export function weightedChoice(source) {
    let rnd = Math.random();
    let lower = 0.00;
    for (let choice in source) {
        let weight = source[choice]; 
        let upper = lower + weight;
        if (rnd >= lower && rnd < upper) {
            return choice; 
        }
        lower += weight;
    }

    // Never reached 100% and random 
    // number is out of bounds
    return undefined;   
}