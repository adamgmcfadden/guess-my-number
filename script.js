'use strict';

// Define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// initial score
let score = 20;
let highscore = 0;

// function to display message to user
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for the "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //  when there is no input
  if (!guess) {
    displayMessage('⛔ No number entered!');
    // When player wins the game!
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // ternary operator for too high or too low

      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      // reduce score by 1
      score--;
      // change score on DOM
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      // after loss, set score to 0
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ec1818';
    }
  }
});

// event listener for the Again! button
document.querySelector('.again').addEventListener('click', function () {
  console.log('Clicked the again button!');
  // reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  // reassign a secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // reset number variable
  document.querySelector('.number').textContent = '?';
  // reset the message
  displayMessage('Start guessing...');
  // reset the input value
  document.querySelector('.guess').value = '';
  // reset background color
  document.querySelector('body').style.backgroundColor = '#222';
  // reset number width
  document.querySelector('.number').style.width = '15rem';
});
