function computerPlay() {
  computerSelections = ['Rock', 'Paper', 'Scissors'];
  const computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
  return computerSelection
}

function game() {
  for (let i = 1; i <6; i++) {
    const playerSelection = prompt(`Round ${i}: rock, paper, or scissors?`);
    const computerSelection = computerPlay();
    const roundResults = (playRound(playerSelection, computerSelection));
    console.log(roundResults);
    if (roundResults == 'Please enter a valid input.') {
      i += -1; // re-play the round
    }
  }
  if (playerScore == computerScore) {
    console.log(`You tied this game of Rock Paper Scissors.
Your score: ${playerScore}.
Computer's score: ${computerScore}`);
  }

  else if (playerScore > computerScore) {
    console.log(`Congratulations! You won this game of Rock Paper Scissors.
Your score: ${playerScore}.
Computer's score: ${computerScore}`);
  }

  else if (playerScore < computerScore) {
    console.log(`Sorry! You lost this game of Rock Paper Scissors.
Your score: ${playerScore}.
Computer's score: ${computerScore}.`);
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase().trim() == 'rock') {
    if (computerSelection == 'Rock') {
      const message = "You tie this round! Rock and rock ties."
      playerScore += 1;
      computerScore += 1;
      return message;
    }
    if (computerSelection == 'Paper') {
      const message = "You lose this round! Paper beats rock."
      computerScore += 1;
      return message;
    }
    if (computerSelection == 'Scissors') {
      const message = "You win this round! Rock beats scissors."
      playerScore += 1;
      return message;
    }
  }

  else if (playerSelection.toLowerCase().trim() == ('paper')) {
    if (computerSelection == 'Rock') {
      const message = "You win this round! Paper beats rock."
      playerScore += 1;
      return message;
    }
    if (computerSelection == 'Paper') {
      const message = "You tie this round! Paper and paper ties."
      playerScore += 1;
      computerScore += 1;
      return message;
    }
    if (computerSelection == 'Scissors') {
      const message = "You lose this round! Scissors beats paper."
      computerScore += 1;
      return message;
    }
  }

  else if (playerSelection.toLowerCase().trim() == ('scissors')) {
    if (computerSelection == 'Rock') {
      const message = "You lose this round! Rock beats scissors."
      computerScore += 1;
      return message;
    }
    if (computerSelection == 'Paper') {
      const message = "You win this round! Sccisors beats paper."
      playerScore += 1;
      return message;
    }
    if (computerSelection == 'Scissors') {
      const message = "You tie this round. Scissors and scissors tie."
      playerScore += 1;
      computerScore += 1;
      return message;
    }
  } else {
    const message = 'Please enter a valid input.';
    return message
  }
}

console.log(`Let's play!`);
let computerScore = 0;
let playerScore = 0;
game();
