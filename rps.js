const playerDisplay = document.querySelector('#playerDisplay');
const computerDisplay = document.querySelector('#computerDisplay');
const resultDisplay = document.querySelector('#resultDisplay');


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
    
    humanScore = 0;
    computerScore = 0;
    totalTime = 0;
    truer = 0;

    

    function PlayRound(humanChoice, computerChoice) {

    
      if(humanChoice == 'rock' && computerChoice == 'paper') {
       computerScore++;
       result = "You lose, Paper beats Rock!";
       
       } 
      else if(humanChoice == 'paper' && computerChoice == 'scissors') {
         computerScore++;
         result = "You lose, Scissors beats Paper!";
         
        }
      else if(humanChoice == 'scissors' && computerChoice == 'rock') {
       computerScore++;
       result = "You lose, Rock beats Scissors!";
       
       }
      else if(computerChoice == 'scissors' && humanChoice == 'rock') {
        humanScore++;
        result = "You win, Rock beats Scissors!";
        
      }
      else if(computerChoice == 'rock' && humanChoice == 'paper') {
        humanScore++;
        result = "You win, Paper beats Rock!";
        
      }
      else if(computerChoice == 'paper' && humanChoice == 'scissors') {
       humanScore++;
       result = "You win, Scissors beats Paper!";
       
      }
      else {
       result = "it's a tie";
       
      }

     playerDisplay.textContent = `Player: ${humanChoice} - Player score: ${humanScore}`
     computerDisplay.textContent = `Computer: ${computerChoice} - Computer score: ${computerScore}`
     resultDisplay.textContent = result;
     truer++;
     console.log(truer);

     if(truer > 4) {
      if(humanScore > computerScore) {
        resultDisplay.textContent = "Man beats machine! You win!";
      }
      else if(computerScore > humanScore) {
        resultDisplay.textContent = "Machine beats man! You lose";
      }
      else {
        resultDisplay.textContent = "No one wins lol";
      }
      truer = 0;
      humanScore = 0;
      computerScore = 0;
     }
    }   
  
    
  





const buttons = document.querySelectorAll("button");



buttons.forEach((button) => { 
  button.addEventListener("click", () => { 
   let human = button.id;  
   let computer = getComputerChoice();
   PlayRound(human,computer);
   
   
    });
  
  }); 
 







