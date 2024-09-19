'use strict';

/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = 'Correct Number!!!';

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;
*/
function randomNumb() {
   return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = randomNumb();
let score = 20;
let highscore = 0;
let displayMessage = function (message){
   document.querySelector(".message").textContent = message;
};



//btn again
document.querySelector('.again').addEventListener('click', function() {
   let selectNumber = document.querySelector('.number'); 
   score = 20;
   document.querySelector('.score').textContent = 20;
   document.querySelector('body').style.backgroundColor = '#222';
   selectNumber.style.width = '150px';
   selectNumber.textContent = '?';
   displayMessage('Start guessing...');
   secretNumber = randomNumb();
   document.querySelector('.guess').value = '';
})

document.querySelector(".check").addEventListener('click', function() {
   const guess = Number(document.querySelector('.guess').value);

   if(!guess){
    displayMessage('No number! :/');
    //when player wins
   } else if (guess === secretNumber) {
      let selectNumber = document.querySelector('.number');
      displayMessage('Correct Number!!!');
      selectNumber.textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'green';
      selectNumber.style.width = '300px';

      if (score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }
// When guess is wrong
   } else if (guess !== secretNumber) {
      if(score > 1) {
         displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         displayMessage('You lost the game :(');
         document.querySelector('.score').textContent = 0;
      }
   }
});
 /*
// When guess is too high
   } else if (guess > secretNumber) {
      if(score > 1) {
         document.querySelector(".message").textContent = 'Too high!';
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         document.querySelector(".message").textContent = 'You lost the game :(';
         document.querySelector('.score').textContent = 0;
      }
// When guess is too low
   } else if (guess < secretNumber) {
      if(score > 1) {
         document.querySelector(".message").textContent = 'Too low!';
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         document.querySelector(".message").textContent = 'You lost the game :(';
         document.querySelector('.score').textContent = 0;
      }
   }
      */