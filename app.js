// Author: Mitch Allen
// File: app.js

import { weightedChoice } from './weighted-choice.js';

let canvas = document.getElementById("canvas");
const SCREEN_SIZE = 300;
const DIM = 10;
const CELL_SIZE = SCREEN_SIZE / DIM;
const BORDER = 1.0;
const COLOR_NEON_PINK = "#FF10F0";
const COLOR_2 = "#F0FF10";
const COLOR_3 = "#10F0FF";
const SOURCE = {
    [COLOR_NEON_PINK]: 0.70,
    [COLOR_2]: 0.10,
    [COLOR_3]: 0.10,
    "white": 0.10,
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
