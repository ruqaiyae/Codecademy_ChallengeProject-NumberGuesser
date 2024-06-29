let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanToTarget = Math.abs(humanGuess - targetNumber);
  const computerToTarget = Math.abs(computerGuess - targetNumber)
  
  if(humanToTarget === computerToTarget || humanToTarget < computerToTarget) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if(winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;

console.log(updateScore('human'))
