const opts = ['rock', 'paper', 'scissor'];
let user = 0, comp = 0;

const getComputerChoice = () => {
  const randInt = Math.floor(Math.random() * 3);
  return opts[randInt];
}

const getUserChoice = (option) => {

  const res = playRound(getComputerChoice(), option);

  if (res === 1) {
    comp++;
    document.getElementById('comp-score').innerText = comp;
  } else if (res === 2) {
    user++;
    document.getElementById('user-score').innerText = user;
  }

  if (user === 5) {
    user = 0;
    comp = 0;
    document.getElementById('user-score').innerText = 0;
    document.getElementById('comp-score').innerText = 0;
    alert('Player Won the game');
    document.getElementById('logs').innerText = "start playing";
  } else if (comp === 5) {
    user = 0;
    comp = 0;
    document.getElementById('user-score').innerText = 0;
    document.getElementById('comp-score').innerText = 0;
    alert('Computer Won the game');
    document.getElementById('logs').innerText = "start playing";
  }
}

const playRound = (computerSelection, userSelection) => {
  if (computerSelection === userSelection.toLowerCase()) {
    document.getElementById('logs').innerText = "it's a tie!";
    return 0;
  } else if (computerSelection === 'rock' && userSelection.toLowerCase() === 'paper') {
    document.getElementById('logs').innerText = "You Win! Paper beats Rock";
    return 2;
  } else if (computerSelection === 'rock' && userSelection.toLowerCase() === 'scissor') {
    document.getElementById('logs').innerText = "You Lose! Rock beats Scissor";
    return 1;
  } else if (computerSelection === 'paper' && userSelection.toLowerCase() === 'rock') {
    document.getElementById('logs').innerText = "You Lose! Paper beats Rock";
    return 1;
  } else if (computerSelection === 'paper' && userSelection.toLowerCase() === 'scissor') {
    document.getElementById('logs').innerText = "You Win! Scissor beats Paper";
    return 2;
  } else if (computerSelection === 'scissor' && userSelection.toLowerCase() === 'paper') {
    document.getElementById('logs').innerText = "You Lose! Scissor beats Paper";
    return 1;
  } else if (computerSelection === 'scissor' && userSelection.toLowerCase() === 'rock') {
    document.getElementById('logs').innerText = "You Win! Rock beats Scissor";
    return 2;
  } else {
    console.log("invalid input");
  }
}

