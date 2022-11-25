/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let finalResult = document.getElementById('result')
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let rps = ["Rock", " Paper", "Scissors"];
  let randoms = Math.floor(Math.random() * rps.length);
  return rps[randoms];

}
console.log(getComputerChoice());
let totalScore = {
  playerWOn: 0, computerWon: 0
}
let playerWOn;
let computerWon;
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
    score = -1;
  } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
    score = -1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
    score = -1;
  }
  else {
    score = 0;
  }
  // return the result of score based on if you won, drew, or lost



  // All situations where human draws, set `score` to 0


  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here


  // Otherwise human loses (aka set score to -1)


  // return score
  return score;

};

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  if (score == 1) {
    finalResult = 'You Win!';
    result.innerText = `${playerChoice} beats  ${computerChoice}  ${finalResult} `;

  }
  else if (score == 0) {
    finalResult = "it's a Draw";
    result.innerText = `${playerChoice} and ${computerChoice}  ${finalResult} `;

  }
  else {
    finalResult = "your lost";
    result.innerText = `${computerChoice} beats  ${playerChoice}  ${finalResult} `;
  }
  let playerscoreis =document.getElementById('player-score')
  playerscoreis.innerText=`${totalScore.playerWOn}`
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  let computerChoice = getComputerChoice();
  console.log({ computerChoice });
  let score = getResult(playerChoice, computerChoice);
  console.log({ score });
  totalScore.playerWOn+=score;
  showResult(score, playerChoice, computerChoice);
  console.log(totalScore);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttonsle
  let btn = document.querySelectorAll(".rpsButton");
  btn.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  });
  let eraceButton=document.getElementById("endGameButton");
  eraceButton.onclick=()=>endGame();

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument



  // Add a click listener to the end game button that runs the endGame() function on click

}

// ** endGame function clears all the text on the DOM **
function endGame() {
 let playerChoice;
 let computerChoice;
 let finalResult;
  result.innerText = `${playerChoice} beats  ${computerChoice}  ${finalResult} `;
  result.innerText =''



}

playGame()