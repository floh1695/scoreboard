// Team data
let team1Name = 'Team 1';
let team1Score = 0;

let team2Name = 'Team 2';
let team2Score = 0;

// User input
const team1TeamBox = document.querySelector('#team1TeamBox');
const team2TeamBox = document.querySelector('#team2TeamBox');

const team1NameInput = team1TeamBox.querySelector('.team-name-input');
const team2NameInput = team2TeamBox.querySelector('.team-name-input');

const team1NameUpdateButton = team1TeamBox.querySelector('.team-name-button');
const team2NameUpdateButton = team2TeamBox.querySelector('.team-name-button');

const team1NameAddButton = team1TeamBox.querySelector('.team-score-inc-button');
const team2NameAddButton = team2TeamBox.querySelector('.team-score-inc-button');

const team1NameSubButton = team1TeamBox.querySelector('.team-score-dec-button');
const team2NameSubButton = team2TeamBox.querySelector('.team-score-dec-button');

// Output related
const team1NameHeader = team1TeamBox.querySelector('.team-name');
const team2NameHeader = team2TeamBox.querySelector('.team-name');

const team1ScoreHeader = team1TeamBox.querySelector('.team-score');
const team2ScoreHeader = team2TeamBox.querySelector('.team-score');

const main = () => {
  team1NameUpdateButton.addEventListener('click', (event) => {
    team1Name = team1NameInput.value;
    team1NameHeader.textContent = team1Name;
  });
  team2NameUpdateButton.addEventListener('click', (event) => {
    team2Name = team2NameInput.value;
    team2NameHeader.textContent = team2Name;
  });
}

document.addEventListener('DOMContentLoaded', main);
