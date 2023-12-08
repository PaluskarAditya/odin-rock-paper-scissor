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
    document.getElementById('user-option').src = "question.png"
    document.getElementById('comp-option').src = "question.png"
  } else if (comp === 5) {
    user = 0;
    comp = 0;
    document.getElementById('user-score').innerText = 0;
    document.getElementById('comp-score').innerText = 0;
    alert('Computer Won the game');
    document.getElementById('logs').innerText = "start playing";
    document.getElementById('user-option').src = "question.png"
    document.getElementById('comp-option').src = "question.png"
  }
}

const playRound = (computerSelection, userSelection) => {
  if (computerSelection === userSelection.toLowerCase()) {
    document.getElementById('logs').innerText = "it's a tie!";
    document.getElementById('user-option').src = `${userSelection.toLowerCase()}.png`
    document.getElementById('comp-option').src = `${userSelection.toLowerCase()}.png`
    return 0;
  } else if (computerSelection === 'rock' && userSelection.toLowerCase() === 'paper') {
    document.getElementById('logs').innerText = "You Win! Paper beats Rock";
    document.getElementById('user-option').src = "paper.png"
    document.getElementById('comp-option').src = "rock.png"
    return 2;
  } else if (computerSelection === 'rock' && userSelection.toLowerCase() === 'scissor') {
    document.getElementById('logs').innerText = "You Lose! Rock beats Scissor";
    document.getElementById('user-option').src = "scissor.png"
    document.getElementById('comp-option').src = "rock.png"
    return 1;
  } else if (computerSelection === 'paper' && userSelection.toLowerCase() === 'rock') {
    document.getElementById('logs').innerText = "You Lose! Paper beats Rock";
    document.getElementById('user-option').src = "rock.png"
    document.getElementById('comp-option').src = "paper.png"
    return 1;
  } else if (computerSelection === 'paper' && userSelection.toLowerCase() === 'scissor') {
    document.getElementById('logs').innerText = "You Win! Scissor beats Paper";
    document.getElementById('user-option').src = "scissor.png"
    document.getElementById('comp-option').src = "paper.png"
    return 2;
  } else if (computerSelection === 'scissor' && userSelection.toLowerCase() === 'paper') {
    document.getElementById('logs').innerText = "You Lose! Scissor beats Paper";
    document.getElementById('user-option').src = "paper.png"
    document.getElementById('comp-option').src = "scissor.png"
    return 1;
  } else if (computerSelection === 'scissor' && userSelection.toLowerCase() === 'rock') {
    document.getElementById('logs').innerText = "You Win! Rock beats Scissor";
    document.getElementById('user-option').src = "rock.png"
    document.getElementById('comp-option').src = "scissor.png"
    return 2;
  } else {
    console.log("invalid input");
  }
}

