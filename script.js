// Make an array from which to pull computerSelection.
const RPS = ["rock", "paper", "scissors",]
let playerWins = 0, computerWins = 0, gamesPlayed = 0;

// get r/p/s for computer at random
function computerSelect() {
  // Get a random number and modulo 3.
  let key = ((Math.floor(Math.random()*1000) + 1) % 3);
  // Return the selection from an array of the three options.
  return RPS[key];
}

function playerSelect() {
  // Ask the user for rock, paper or scissors, convert to lowercase for easier comparisons
  let playerSelection = prompt("Rock, paper, scissors, SHOOT!").toLowerCase();
  // Validate player's choice, re-prompt if necessaary
  while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    // Catch invalid choices and re-prompt.
    alert ("Nope! Not a valid choice. Try Again.");
    playerSelection = playerSelect()
  }
  // Return the player's choice as a lowercase string.
  return playerSelection;
}

// Get the number of rounds to be simulated.
function getRounds() {
  // Ask for an integer between 1 and 51, inclusive.
  let games = parseInt(prompt("How many games would you like to play?"));
  // MValidate user input.
  if (games.length <= 0 || isNaN(games)|| (games % 2) != 1) {
    alert("Please enter an odd number so one of us can win.");
    getRounds();
  } else if (games > 51) {
    alert("That might take a while. Pick a more reasonable number of games, please.");
    getRounds();
  } else {
    // Return if player entered a number from 1 through 51.
    return games;
  }
}

function playRound() {
  // Get the player's choice.
  let playerSelection = playerSelect();
  // Get computer's choice.
  let computerSelection = computerSelect();

  console.log(`Computer Selection: ${computerSelection}`);
  console.log(`Player Selection is: ${playerSelection}`);

  // run through the cases
  if (computerSelection == playerSelection) {
    // Player and Computer tied, do it again (do not update the gamesPlayed counter).
    alert("It's a tie! Let's go again.");
    return;
  }
  if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")) {
    // Cases where the player wins
    playerWins++;
    gamesPlayed++;
    alert(`You win! You have ${playerWins} victories, the computer has won ${computerWins} times. Good luck!`);
  } else {
    // Cases where the computer wins
    computerWins++;
    gamesPlayed++;
    alert(`Aw, rats! You lost. You have ${playerWins} wins and the computer has ${computerWins} wins. Good luck!`)
  }
 
  console.log(`Computer score: ${computerWins}`);
  console.log(`Player score: ${playerWins}`);
}

// Get a number of rounds to simulate from the player.
let rounds = getRounds();
// Play rounds until enough games have been played and won.
while (gamesPlayed < rounds) {
  playRound();
}

// Log the winner of the entire game.
if (playerWins > computerWins) {
  console.log(`Player wins with a score of ${playerWins} to ${computerWins}`);
} else {
  console.log(`Bummer! Computer wins with a score of ${computerWins} to ${playerWins}`)
}

