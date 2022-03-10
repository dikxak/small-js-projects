'use strict';

const hexCode = document.querySelector('.hex-code');
const btnChanger = document.querySelector('.btn');
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

const chooseHex = function () {
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

const changeBackground = function () {
  const hexString = `#${hexCodes[chooseHex()].toUpperCase()}${hexCodes[
    chooseHex()
  ].toUpperCase()}${hexCodes[chooseHex()].toUpperCase()}${hexCodes[
    chooseHex()
  ].toUpperCase()}${hexCodes[chooseHex()].toUpperCase()}${hexCodes[
    chooseHex()
  ].toUpperCase()}`;

  document.body.style.backgroundColor = hexString;

  if (colorNameMap.has(hexString)) {
    hexCode.textContent = colorNameMap.get(hexString);
  } else {
    hexCode.textContent = hexString;
  }
};

btnChanger.addEventListener('click', changeBackground);
