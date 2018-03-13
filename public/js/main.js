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

const teamCount = 2; // Config
const periodCount = 2; // Config
const teams = [];
const periods = [];
let currentPeriod = 1;
let gameOver = false;

const main = () => {
  for (let i = 1; i < teamCount + 1; i++) {
    teams.push(new Team(`Team ${i}`, `#team${i}TeamBox`));
  }
  
  document.querySelector('.next-period-button').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(periods);
    if (gameOver) {
      teams.forEach((team) => {
        team.score = 0;
      });
      periods.length = 0;
      currentPeriod = 1;
      gameOver = false;
      document.querySelector('.period').textContent = 1;
      display = document.querySelector('.periods-display');
      while (display.firstChild) {
        display.removeChild(display.firstChild);
      }
      return;
    }

    const period = [];
    teams.forEach((team) => {
      period.push(team.score);
    });
    periods.push(period);
    
    if (currentPeriod == periodCount) {
      gameOver = true;
      document.querySelector('.period').textContent = 'Game Over!';
    }
    else {
      currentPeriod += 1;
      document.querySelector('.period').textContent = currentPeriod;
    }

    paragraph = document.createElement('p');
    paragraph.textContent = period;
    display = document.querySelector('.periods-display');
    display.appendChild(paragraph);
  });
}

document.addEventListener('DOMContentLoaded', main);
