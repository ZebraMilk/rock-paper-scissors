// Make an array from which to pull computerChoice.
const HBN = ["hunter", "bear", "ninja",]
// Initialize counters when page is loaded
let playerWins = 0, computerWins = 0, gamesPlayed = 0, ties = 0;
// get all the butons to play with
const buttons = document.getElementsByTagName("button");
// convert to array
Array.from(buttons);
// Attach eventListener to each button, listen for click and return the id value of the button
for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener('click', playRound);
}
// Get the display so I can (dis)play with the text therein
const display = document.getElementById('display');









// get r/p/s for computer at random
function computerChoose() {
  // Get a random number and modulo 3.
  let key = ((Math.floor(Math.random() * 1000) + 1) % 3);
  // Return the selection from an array of the three options.
  return HBN[key];
}

// return the id value of the button the player clicks
function playerChoose(e) {
  return e.target.id;
}

// play a round when the player clicks a button
function playRound(e) {
  // Get the player's choice.
  let playerChoice = playerChoose(e);
  // Get computer's choice.
  let computerChoice = computerChoose();

  // run through the cases
  if (computerChoice == playerChoice) {
    // Player and Computer tied, do it again (do not update the gamesPlayed counter).
    ties++;
    updateDisplay("It's a Tie!");
  } else if ((playerChoice == "hunter" && computerChoice == "bear") ||
    (playerChoice == "ninja" && computerChoice == "hunter") ||
    (playerChoice == "bear" && computerChoice == "ninja")) {
    // Cases where the player wins
    playerWins++;
    updateDisplay('You Win!');
  } else {
    // Cases where the computer wins
    computerWins++;
    updateDisplay('I Win!');
  }
  // Update the scoreboard with the accurate total
  updateScore();
  
  // Check to see if someone has won the whole game, reaching 5 wins
  if (playerWins == 5) {
    updateDisplay('You win it all!');
    clearScore();
  }
  if (computerWins == 5) {
    updateDisplay('Bummer. I win the game!');
    clearScore();
  }
}

function updateDisplay(someText) {
  display.textContent = someText;
}

// Update score
function updateScore() {
  document.getElementById('player-score').textContent = playerWins;
  document.getElementById('tie-count').textContent = ties;
  document.getElementById('computer-score').textContent = computerWins;

}
// function updateDisplay
function clearScore() {
  playerWins = 0, computerWins = 0, ties = 0, gamesPlayed = 0
}
