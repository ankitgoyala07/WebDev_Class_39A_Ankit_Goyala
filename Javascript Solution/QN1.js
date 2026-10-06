/*
Q1. Basic Operations
Write a JavaScript program that takes a number and calculates:
Its square
Its cube
Display both results.
*/

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number: "));

let square = num * num;
let cube = num * num * num;

console.log("Square =", square);
console.log("Cube =", cube);