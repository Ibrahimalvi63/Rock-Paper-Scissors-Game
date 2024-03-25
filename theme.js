let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreBrd = document.querySelector('#user-score');
const compScoreBrd = document.querySelector('#comp-score');





const drawGame = () =>{
 msg.style.backgroundColor = 'blue';
 msg.innerText = 'The game is draw. Play again!';
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++
    msg.innerText = `You win! Your ${userChoice} beats computer ${compChoice}`;
    msg.style.backgroundColor = 'green';
    userScoreBrd.innerText = userScore;
    
  } else {
    compScore++
    msg.innerText = `You loss! Computer ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = 'red';
    compScoreBrd.innerText = compScore;
  }
}


const playGame = (userChoice) => {
  
  const compChoice = genCompChoice();
  
  if (userChoice===compChoice) {
    drawGame()
  } else {
    let userWin = true;
    if (userChoice==='rock') {
      //paper, scissors 
      userWin = compChoice==='paper'?false:true;
    } else if (userChoice==='paper') {
      //rock, scissors 
      userWin = compChoice==='scissors'?false:true;
    } else {
      //rock, paper
      userWin = compChoice==='rock'?false:true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
  
}



const genCompChoice = () => {
  let options = ['rock', 'paper', 'scissors'];
  ranIndx = Math.floor(Math.random()*3);
  return options[ranIndx];
}


choices.forEach((choice) => {
  choice.addEventListener('click', () =>{
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  })
})
  
  