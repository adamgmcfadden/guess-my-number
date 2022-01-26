'use strict';

// Define the secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// temp to check correct
document.querySelector('.number').textContent = secretNumber;

// Event listener for the "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number entered!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
  }
});
