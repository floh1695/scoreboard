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

const teamCount = 2;
const teams = [];

const main = () => {
  for (let i = 1; i < teamCount + 1; i++) {
    teams.push(new Team(`Team ${i}`, `#team${i}TeamBox`));
  }
}

document.addEventListener('DOMContentLoaded', main);
