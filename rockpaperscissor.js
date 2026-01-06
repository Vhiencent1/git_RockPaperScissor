class Game {
  constructor() {
    this.choices = ['rock', 'paper', 'scissors'];
    this.playerScore = 0;
    this.computerScore = 0;

    this.resultDiv = document.querySelector('.results');
    this.playerScoreSpan = document.getElementById('player-score');
    this.computerScoreSpan = document.getElementById('computer-score');
  }

  playRound(playerChoice) {
    const computerChoice = this.getComputerChoice();

    // DRAW
    if (playerChoice === computerChoice) {
      this.resultDiv.textContent = `Draw! Both chose ${playerChoice}`;
      return;
    }

    const playerWins =
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper');

    // PLAYER WINS
    if (playerWins) {
      this.playerScore++;
      this.resultDiv.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    }
    // COMPUTER WINS
    else {
      this.computerScore++;
      this.resultDiv.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    }

    this.updateScore();
    this.checkWinner();
  }

  getComputerChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  updateScore() {
    this.playerScoreSpan.textContent = this.playerScore;
    this.computerScoreSpan.textContent = this.computerScore;
  }

  checkWinner() {
    if (this.playerScore === 5 || this.computerScore === 5) {
      this.resultDiv.textContent =
        this.playerScore === 5
          ? '🎉 YOU WON THE GAME!'
          : '💻 COMPUTER WON THE GAME!';
      this.disableButtons();
    }
  }

  disableButtons() {
    document.querySelectorAll('.rps-btn').forEach(btn => btn.disabled = true);
  }

  resetGame() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.updateScore();
    this.resultDiv.textContent = 'Game reset. Choose again!';
    document.querySelectorAll('.rps-btn').forEach(btn => btn.disabled = false);
  }
}

// INIT GAME
window.onload = () => {
  const game = new Game();

  document.querySelectorAll('.rps-btn').forEach(button => {
    button.addEventListener('click', () => {
      const choice = button.dataset.choice;
      game.playRound(choice);
    });
  });

  document.querySelector('.play-again')
    .addEventListener('click', () => game.resetGame());
};
