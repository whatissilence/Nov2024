'use strict';

const MILLISECONDS_IN_SECOND = 1000;
let horizontalStepSize = 10;
let verticalStepSize = 10;

const squareElement = document.getElementById('square');
const squareWidth = squareElement.offsetWidth;
const squareHeight = squareElement.offsetHeight;

const interval = 0.1; // sec
let squareLeft = 0;
let squareTop = 0;

function move() {
  if (
    !(squareLeft + horizontalStepSize < window.innerWidth - squareWidth) ||
    squareLeft + horizontalStepSize < 0
  ) {
    horizontalStepSize = -horizontalStepSize;
    squareElement.style.backgroundColor = getRandomColor();
  }

  if (
    !(squareTop + verticalStepSize < window.innerHeight - squareHeight) ||
    squareTop + verticalStepSize < 0
  ) {
    verticalStepSize = -verticalStepSize;
    squareElement.style.backgroundColor = getRandomColor();
  }

  squareLeft += horizontalStepSize;
  squareElement.style.left = `${squareLeft}px`;

  squareTop += verticalStepSize;
  squareElement.style.top = `${squareTop}px`;
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  const red = randomIntFromInterval(0, 255);
  const green = randomIntFromInterval(0, 255);
  const blue = randomIntFromInterval(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

setInterval(move, interval * MILLISECONDS_IN_SECOND);