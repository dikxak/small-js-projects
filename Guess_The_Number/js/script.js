'use strict';

// function to generate the secretNumber.
const generateSecretNumber = function () {
  const secretNumb = Math.trunc(Math.random() * 20) + 1;
  return secretNumb;
};

// displayMessage displays the message to the user for their each inputs
const displayMessage = function (message) {
  document.querySelector('.user-message').textContent = message;
};

// secretNumber is the randomly generated number which the user/player should guess
let secretNumber = generateSecretNumber();

// score is the turn that the user gets to guess the secret number.
let score = 20;
let highScore = 0;

// userInput is used to store the input value that user inputs each time.
let userInput;

// adding event-listener to the check-number after user inputs the number and checks if it is equal to secretNumber or not.Different operations are also performed with various messages
document.querySelector('.check-number').addEventListener('click', function () {
  userInput = Number(document.querySelector('.number').value);
  if (!userInput) {
    displayMessage('⛔ No Input!');
  } else if (userInput === secretNumber) {
    // checks if userInput is equal with secretNumber, if is equal,perform various operations.
    if (score > highScore) {
      highScore = score;
    }
    displayMessage('🎉 You Won!');
    document.querySelector('.high-score').textContent = highScore;
    document.querySelector('.secret-number-section').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#9C9F00';
    document.querySelector('.secret-number-section').style.width = '30rem';
  } else if (score > 1) {
    // check if score > 1, and checks for various conditions and operations
    if (userInput !== secretNumber) {
      displayMessage(userInput < secretNumber ? '📉 Too Low!' : '📈 Too High!');
      --score;
      document.querySelector('.score').textContent = score;
    }
  } else {
    // when user loses the game.
    displayMessage('💥 You Lost!');
    document.querySelector('.score').textContent = 0;
    document.querySelector('.secret-number-section').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#C60000';
    document.querySelector('.secret-number-section').style.width = '30rem';
  }
});

// adding event listener to play-again button which resets everything in the game to initial state but without changing high-score that user scored.
document.querySelector('.play-again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#291746';
  displayMessage('💁‍♀️ Start Guessing....');
  document.querySelector('.secret-number-section').textContent = '?';
  document.querySelector('.number').value = '';
  document.querySelector('.secret-number-section').style.width = '15rem';
});
