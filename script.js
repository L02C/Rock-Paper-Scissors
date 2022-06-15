let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  computerSelections = ['Rock', 'Paper', 'Scissors'];
  const computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
  return computerSelection
}

function checkscore() {
  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      main_message.innerHTML = (`Congratulations! You won this game of Rock Paper Scissors. Click 'New Game' to play again.`);
      rock_btn.removeEventListener("click", rock);
      paper_btn.removeEventListener("click", paper);
      scissors_btn.removeEventListener("click", scissors);
    }

    else if (computerScore == playerScore) {
      main_message.innerHTML = (`You tied this game of Rock Paper Scissors. Click 'New Game' to play again.`);
      rock_btn.removeEventListener("click", rock);
      paper_btn.removeEventListener("click", paper);
      scissors_btn.removeEventListener("click", scissors);
    }

    else if (computerScore > playerScore) {
      main_message.innerHTML = (`Sorry! You lost this game of Rock Paper Scissors. Click 'New Game' to play again.`);
      rock_btn.removeEventListener("click", rock);
      paper_btn.removeEventListener("click", paper);
      scissors_btn.removeEventListener("click", scissors);
    }
  }
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'Rock') {
    if (computerSelection == 'Rock') {
      const message = "You tie this round! Rock and rock ties."
      player_score_UI.innerHTML = (playerScore += 1);
      computer_score_UI.innerHTML = computerScore += 1;
      return message;
    }
    if (computerSelection == 'Paper') {
      const message = "You lose this round! Paper beats rock."
      computer_score_UI.innerHTML = computerScore += 1;
      return message;
    }
    if (computerSelection == 'Scissors') {
      const message = "You win this round! Rock beats scissors."
      player_score_UI.innerHTML = playerScore += 1;
      return message;
    }
  }

  else if (playerSelection == ('Paper')) {
    if (computerSelection == 'Rock') {
      const message = "You win this round! Paper beats rock."
      player_score_UI.innerHTML = playerScore += 1;
      return message;
    }
    if (computerSelection == 'Paper') {
      const message = "You tie this round! Paper and paper ties."
      player_score_UI.innerHTML = playerScore += 1;
      computer_score_UI.innerHTML = computerScore += 1;
      return message;
    }
    if (computerSelection == 'Scissors') {
      const message = "You lose this round! Scissors beats paper."
      computer_score_UI.innerHTML = computerScore += 1;
      return message;
    }
  }

  else if (playerSelection == ('Scissors')) {
    if (computerSelection == 'Rock') {
      const message = "You lose this round! Rock beats scissors."
      computer_score_UI.innerHTML = computerScore += 1;
      return message;
    }
    if (computerSelection == 'Paper') {
      const message = "You win this round! Sccisors beats paper."
      player_score_UI.innerHTML = playerScore += 1;
      return message;
    }
    if (computerSelection == 'Scissors') {
      const message = "You tie this round. Scissors and scissors tie."
      player_score_UI.innerHTML = playerScore += 1;
      computer_score_UI.innerHTML = computerScore += 1;
      return message;
    }
  }
};

const new_game = document.getElementById('new-game-btn');
const main_message = document.getElementById('main-message');
const round_message = document.getElementById('round-message');
const computer_score_UI = document.getElementById('computer-score');
const player_score_UI = document.getElementById('player-score');
const rock_btn = document.getElementById('rock-btn');
const paper_btn = document.getElementById('paper-btn');
const scissors_btn = document.getElementById('scissors-btn');

function newgame() {
  console.log(`Let's play!`);
  computerScore = 0;
  playerScore = 0;
  player_score_UI.innerHTML = '0';
  computer_score_UI.innerHTML = '0';
  main_message.innerHTML = 'New game started!';
  round_message.innerHTML = 'First to 5 wins!';
  rock_btn.addEventListener("click", rock);
  paper_btn.addEventListener("click", paper);
  scissors_btn.addEventListener("click", scissors);
}

function rock() {
  playerSelection = "Rock";
  const computerSelection = computerPlay();
  const roundResults = (playRound(playerSelection, computerSelection));
  console.log(roundResults);
  round_message.innerHTML = (roundResults);
  checkscore();
}

function paper() {
  playerSelection = "Paper";
  const computerSelection = computerPlay();
  const roundResults = (playRound(playerSelection, computerSelection));
  console.log(roundResults);
  round_message.innerHTML = (roundResults);
  checkscore();
}

function scissors() {
  playerSelection = "Scissors";
  const computerSelection = computerPlay();
  const roundResults = (playRound(playerSelection, computerSelection));
  console.log(roundResults);
  round_message.innerHTML = (roundResults);
  checkscore();
}

new_game.addEventListener("click", newgame);
