'use strict';

// Define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// initial score
let score = 20;
let highscore = 0;

// Event listener for the "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //  when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number entered!';
    // When player wins the game!
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // TODO refactor code later
    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ec1818';
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
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
  document.querySelector('.message').textContent = 'Start guessing...';
  // reset the input value
  document.querySelector('.guess').value = '';
  // reset background color
  document.querySelector('body').style.backgroundColor = '#222';
  // reset number width
  document.querySelector('.number').style.width = '15rem';
});
