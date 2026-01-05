class Game {
  constructor() {
    this.choices = ['rock', 'paper', 'scissors'];
  }

  play(playerChoice) {
    const computerChoice = this.getComputerChoice();
    const result = this.determineWinner(playerChoice, computerChoice);
    return { computerChoice, result };
  }

  getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'draw';
    }
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'player';
    }
    return 'computer';
  }
}
