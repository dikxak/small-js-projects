'use strict';

const hexCode = document.querySelector('.hex-code');
const rgbValueHeading = document.querySelector('.rgb-value-heading');
const rgbValue = document.querySelector('.rgb-value');
const btnChangeColor = document.querySelector('.btn-change-color');
const btnPrevColor = document.querySelector('.btn-prev-color');
const btnRgbValue = document.querySelector('.btn-rgb-value');

const hexCodes = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

const colors = ['#FFFFFF'];

const chooseHex = () => {
  return Math.trunc(Math.random() * hexCodes.length);
};

const colorNameMap = new Map([
  ['#FF0000', 'Red'],
  ['#FFFFFF', 'White'],
  ['#FFA500', 'Orange'],
  ['#800080', 'Purple'],
  ['#000000', 'Black'],
  ['#FFC0CB', 'Pink'],
]);

const getHexString = () =>
  `#${hexCodes[chooseHex()].toUpperCase()}${hexCodes[
    chooseHex()
  ].toUpperCase()}${hexCodes[chooseHex()].toUpperCase()}${hexCodes[
    chooseHex()
  ].toUpperCase()}${hexCodes[chooseHex()].toUpperCase()}${hexCodes[
    chooseHex()
  ].toUpperCase()}`;

const changeBackground = hexString => {
  document.body.style.backgroundColor = hexString;

  if (colorNameMap.has(hexString))
    hexCode.textContent = colorNameMap.get(hexString);
  else hexCode.textContent = hexString;
};

const generateRandomHexValue = () => {
  const hexString = getHexString();

  if (colors.length === 1) colors.push(hexString);
  else {
    colors[0] = colors[1];
    colors[1] = hexString;
  }

  rgbValueHeading.classList.add('hidden');
  changeBackground(colors[1]);
};

const changeToPrevBackground = () => {
  if (colors.length <= 1) return;

  colors[1] = colors[0];

  rgbValueHeading.classList.add('hidden');
  changeBackground(colors[0]);
};

const generateRGBValue = () => {
  const colorIndex = colors.length === 2 ? 1 : 0;
  const hexValue = colors[colorIndex].replace('#', '');

  const rValue = parseInt(hexValue.substring(0, 2), 16);
  const gValue = parseInt(hexValue.substring(2, 4), 16);
  const bValue = parseInt(hexValue.substring(4, 6), 16);

  rgbValueHeading.classList.remove('hidden');
  rgbValue.textContent = `rgb(${rValue},${gValue},${bValue})`;
};

btnChangeColor.addEventListener('click', generateRandomHexValue);
btnPrevColor.addEventListener('click', changeToPrevBackground);
btnRgbValue.addEventListener('click', generateRGBValue);
