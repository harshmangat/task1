let items = ["rock", "paper", "scissor"];

const Start = confirm('Ready to play?');
Start && startGame();

function computerChoice() {
    let random = Math.trunc(Math.random() * items.length);
    return items[random];
}

function startGame() {
  const computerSelect = computerChoice();
  const userSelect = prompt("Select one item : rock, paper, scissor");
  
  if(!items.includes(userSelect) ||
  (userSelect === undefined)) {
  alert('Please choose a valid item');
    return startGame();
 } 
  
  console.log(getMoveStatus(userSelect, computerSelect));
  
  const shouldContinue = confirm('Do you want to replay?');
  shouldContinue && startGame();
}

function getMoveStatus(userSelect, computerSelect) {
  console.log(`User Select ${userSelect} Computer Select ${computerSelect}`)
  const userWins = 
  (userSelect === "rock" && computerSelect === "scissor") || 
  (userSelect === "scissor" && computerSelect === "paper") || 
  (userSelect === "paper" && computerSelect === "rock");
  
  if(userWins) return 'You Win!';
  
  const computerWins = 
  (userSelect === "scissor" && computerSelect === "rock") || 
  (userSelect === "paper" && computerSelect === "scissor") ||
  (userSelect === "rock" && computerSelect === "paper");
  
  if(computerWins) return 'Computer Wins.';
  
  return "It's a Tie.";
}
































//================================================================================

// let UserInput = prompt('please select one Item: Rock, Paper, scissor');
// UserInput = UserInput.toLowerCase();

// let items= ['rock','paper','scissor'];



// let computerPick = Math.trunc(Math.random() * items.length)
// let computerSelect = items[computerPick]



// if(UserInput === computerSelect){
//  console.log("its a TIE!")
// }
// else if( UserInput === 'rock' && computerSelect === 'scissor'){
//  console.log("You Win!")
// }
// else if( UserInput === 'scissor' && computerSelect === 'rock'){
//  console.log("Computer Wins!")
// }
// else if( UserInput === 'paper' && computerSelect === 'scissor'){
//  console.log("Computer Wins!")
// }
// else if( UserInput === 'scissor' && computerSelect === 'paper'){
//  console.log("You Win!")
// }
// else if( UserInput === 'paper' && computerSelect === 'rock'){
//  console.log("You Win!")
// }
// else if( UserInput === 'rock' && computerSelect === 'paper'){
//  console.log("Computer Wins!")
// } 

// console.log(`User Select ${UserInput} and computer Select ${computerSelect} `);