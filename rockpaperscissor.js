class Game {
  constructor() {
    this.choices = ['rock', 'paper', 'scissors'];
  }

  play(playerChoice) {
    const computerChoice = this.getComputerChoice();
    const result = this.determineWinner(playerChoice, computerChoice);

    // Simple result display (you can improve UI later)
    alert(
      `You chose: ${playerChoice}\n` +
      `Computer chose: ${computerChoice}\n\n` +
      `Result: ${result.toUpperCase()}`
    );
  }

  getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'draw';

    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'player wins';
    }

    return 'computer wins';
  }

  promptUser() {
    alert('Choose Rock, Paper, or Scissors!');
  }
}

/* 👇 THIS MUST BE OUTSIDE THE CLASS */
function choose(choice) {
  if (!window.game) return;
  window.game.play(choice);
}

// Initialize game
window.onload = () => {
  window.game = new Game();
  game.promptUser();
};
