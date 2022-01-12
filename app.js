// Author: Mitch Allen
// File: app.js

import { weightedChoice } from './weighted-choice.js';

let canvas = document.getElementById("canvas");
const SCREEN_SIZE = 300;
const DIM = 10;
const CELL_SIZE = SCREEN_SIZE / DIM;
const BORDER = 1;
const NEON_PINK = "#FF10F0";
const SOURCE = {
    "white": 0.25,
    [NEON_PINK]: 0.50,
    "#444444": 0.25,
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
