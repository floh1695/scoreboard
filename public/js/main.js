class Team {
  constructor(name, query) {
    this.name = name;
    this.score = 0;

    // Set up listeners
    let teamNode = document.querySelector(query);
    teamNode.querySelector('.team-name-button').addEventListener('click', (event) => {
      event.preventDefault();
      let newName = teamNode.querySelector('.team-name-input').value;
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

const main = () => {
  let team1 = new Team('Team 1', '#team1TeamBox');
  let team2 = new Team('Team 2', '#team2TeamBox');
}

document.addEventListener('DOMContentLoaded', main);
