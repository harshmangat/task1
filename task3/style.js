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
  
  console.log(game(userSelect, computerSelect));
  
  const shouldContinue = confirm('Do you want to replay?');
  shouldContinue && startGame();
}

function game(userSelect, computerSelect) {
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

