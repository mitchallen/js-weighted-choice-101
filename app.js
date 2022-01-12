// Author: Mitch Allen
// File: app.js

import { weightedChoice } from './weighted-choice.js';

let canvas = document.getElementById("canvas");
const SCREEN_SIZE = 300;
const DIM = 20;
const CELL_SIZE = SCREEN_SIZE / DIM;
const BORDER = 0.5;
const COLOR_NEON_PINK = "#FF10F0";
const SOURCE = {
    [COLOR_NEON_PINK]: 0.15,
    "cyan": 0.15,
    "blue": 0.70,
}
// create an array filled with results
const arr = Array.from({ length: DIM * DIM }, () => weightedChoice( SOURCE ));
console.log(arr);
// draw canvas
let ctx = canvas.getContext('2d');
if (ctx) {
    // draw background
    ctx.clearRect(0, 0, SCREEN_SIZE, SCREEN_SIZE);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, SCREEN_SIZE, SCREEN_SIZE);
    // draw cells
    let cursor = 0;
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            ctx.fillStyle = arr[cursor++];
            ctx.fillRect(
                i * CELL_SIZE + BORDER,
                j * CELL_SIZE + BORDER,
                CELL_SIZE - BORDER * 2,
                CELL_SIZE - BORDER * 2
            );
        }
    }
}
