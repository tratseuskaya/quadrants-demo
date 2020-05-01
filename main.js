'use strict';

(function main() {
  const canvasElement = document.getElementById('canvas');
  const context = canvasElement.getContext('2d');
  const mouseClickLogArray = [];

  const bcs2ucs = (mouseX, mouseY) => {
    const originX = window.innerWidth / 2;
    const originY = window.innerHeight / 2;
    return window.mapCoordinates(mouseX, mouseY, originX, originY);
  };

  const drawAxis = () => {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.moveTo(window.innerWidth / 2, 0);
    context.lineTo(window.innerWidth / 2, window.innerHeight);

    context.moveTo(0, window.innerHeight / 2);
    context.lineTo(window.innerWidth, window.innerHeight / 2);
    context.stroke();
    context.closePath();
  };

  const print = (arr) => {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
      string += `<ul><li> x = ${arr[i].x}, y = ${arr[i].y}, 
      q = ${arr[i].q}</li></ul> `;
    }
    return string;
  };

  document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const mouseCoordinatesElement = document
      .getElementById('mouseCoordinates');
    const [x, y] = bcs2ucs(mouseX, mouseY);
    mouseCoordinatesElement.innerText = `(${mouseX},${mouseY}) => (${x}, ${y})`;
  });

  document.addEventListener('click', (event) => {
    const [x, y] = bcs2ucs(event.clientX, event.clientY);
    const q = window.quadrants(x, y);
    mouseClickLogArray.push({ x, y, q });
    const mouseClickLogElement = document.getElementById('mouseClickLog');
    // mouseClickLogElement.innerText = JSON.stringify(mouseClickLogArray, null, 2);
    for (let i = 0; i < mouseClickLogArray.length; i++) {
      mouseClickLogElement.innerHTML = print(mouseClickLogArray);
    }
  });

  document.addEventListener('DOMContentLoaded', drawAxis);
  window.addEventListener('resize', drawAxis);
}());
