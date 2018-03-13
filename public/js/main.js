class Team {
  constructor(name, query) {
    this.name = name;
    this.score = 0;

    // Set up listeners
    const teamNode = document.querySelector(query);
    teamNode.querySelector('.team-name-button').addEventListener('click', (event) => {
      event.preventDefault();
      const newName = teamNode.querySelector('.team-name-input').value;
      if (newName != '') {
        this.name = newName
      }
      teamNode.querySelector('.team-name').textContent = this.name;
    });
    teamNode.querySelector('.team-score-inc-button').addEventListener('click', (event) => {
      event.preventDefault();
      this.score += 1;
      teamNode.querySelector('.team-score').textContent = this.score;
    });
    teamNode.querySelector('.team-score-dec-button').addEventListener('click', (event) => {
      event.preventDefault();
      this.score -= 1;
      teamNode.querySelector('.team-score').textContent = this.score;
    });

  }
}

class Game {
  constructor(periodCount, teamCount) {
    this.period = 1;
    this.lastPeriod = periodCount;
    this.periods = [];
    this.teams = [];
    this.gameOver = false;
    
    for (let i = 1; i < teamCount + 1; i++) {
      this.teams.push(new Team(`Team ${i}`, `#team${i}TeamBox`));
    }

    document.querySelector('.next-period-button').addEventListener('click', (event) => {
      event.preventDefault();
      if (this.gameOver) {
        this.restartGame();
        return;
      }
      this.nextPeriod();
    });
  }

  nextPeriod() {
    const period = [];
    this.teams.forEach((team) => {
      period.push(team.score);
    });
    this.periods.push(period);
  
    if (this.period >= this.lastPeriod) {
      this.gameOver = true;
      document.querySelector('.period').textContent = 'Game Over!';
    }
    else {
      this.period += 1;
      document.querySelector('.period').textContent = this.period;
    }
  
    const paragraph = document.createElement('p');
    paragraph.textContent = period;
    const display = document.querySelector('.periods-display');
    display.appendChild(paragraph);
  }

  restartGame() {
    this.teams.forEach((team) => {
      team.score = 0;
    });
    this.periods.length = 0;
    this.period = 1;
    this.gameOver = false;
    document.querySelector('.period').textContent = 1;
    const display = document.querySelector('.periods-display');
    while (display.firstChild) {
      display.removeChild(display.firstChild);
    }
  }
}

const teamCount = 2; // Config
const periodCount = 2; // Config
let game = null;

const main = () => {
  game = new Game(periodCount, teamCount);
}

document.addEventListener('DOMContentLoaded', main);
