// Make an array from which to pull computerChoice.
const RPS = ["rock", "paper", "scissors",]
let playerWins = 0, computerWins = 0, gamesPlayed = 0, ties = 0;

// get r/p/s for computer at random
function computerChoose() {
  // Get a random number and modulo 3.
  let key = ((Math.floor(Math.random() * 1000) + 1) % 3);
  // Return the selection from an array of the three options.
  return RPS[key];
}









function playRound() {
  // Get the player's choice.
  let playerChoice = playerSelect();
  // Get computer's choice.
  let computerChoice = computerSelect();

  console.log(`Computer Choice: ${computerChoice}`);
  console.log(`Player Choice: ${playerChoice}`);

  // run through the cases
  if (computerChoice == playerChoice) {
    // Player and Computer tied, do it again (do not update the gamesPlayed counter).
    ties++;
    return;
  }
  if ((playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")) {
    // Cases where the player wins
    playerWins++;
  } else {
    // Cases where the computer wins
    computerWins++;
  }

  console.log(`Computer score: ${computerWins}`);
  console.log(`Player score: ${playerWins}`);
}

// Get a number of rounds to simulate from the player.
// Play rounds until enough games have been played and won.
while (computerWins <= 5 %% playerWins <=5) {
  playRound();
}

