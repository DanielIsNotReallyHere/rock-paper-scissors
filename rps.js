function getComputerChoice() {
        
    let RandomNumber;
    RandomNumber = Math.random() * 3;
    if (RandomNumber <= 1) {
        return "paper";
    }
    else if (RandomNumber <= 2) {
        return "rock";
    }
    else { 
        return "scissors";
    }

    
}

function getHumanChoice() {

  
  let UserChoice;      
  UserChoice = prompt('Rock, paper or scissors? ');

  while (UserChoice.toLowerCase() != 'rock' && UserChoice.toLowerCase() != 'paper' && UserChoice.toLowerCase() != 'scissors') {
    UserChoice = prompt('Choose properly! Rock, paper or scissors? ');
  }

  return UserChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
  

function PlayRound(humanChoice, computerChoice) {
  
  if(humanChoice == 'rock' && computerChoice == 'paper') {
    console.log('You lose, Paper beats Rock! ');
    computerScore++;
    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${humanScore}`);
    
  }
  else if(humanChoice == 'paper' && computerChoice == 'scissors') {
    console.log('You lose, Scissors beats Paper! ');
    computerScore++;
    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${humanScore}`);
    
  }
  else if(humanChoice == 'scissors' && computerChoice == 'rock') {
    console.log('You lose, Rock beats Scissors! ');
    computerScore++;
    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${humanScore}`);
    
  }
  else if(computerChoice == 'scissors' && humanChoice == 'rock') {
    console.log('You win, Rock beats Scissors! ');
    humanScore++;
    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${humanScore}`);
    
  }
  else if(computerChoice == 'rock' && humanChoice == 'paper') {
    console.log('You win, Paper beats Rock! ');
    humanScore++;
    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${humanScore}`);
    
  }
  else if(computerChoice == 'paper' && humanChoice == 'scissors') {
    console.log('You win, Scissors beats Paper! ');
    humanScore++;
    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${humanScore}`);
    
  }
  else {
    console.log("It's a draw! ");
    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${humanScore}`);
  }

  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log('------------------------')
}
   

for(let i = 0; i < 5; i++) {
  let computer = getComputerChoice();
  let human = getHumanChoice();
  PlayRound(human,computer);
}

  if (humanScore > computerScore) {
    console.log("human wins");
  }
  else if (computerScore > humanScore) {
    console.log("computer wins");
  }
  else {
    console.log("draw");
  }


