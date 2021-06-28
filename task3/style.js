
let UserInput = prompt('please select one Item: Rock, Paper, scissor');
UserInput = UserInput.toLowerCase();

let items= ['rock','paper','scissor'];



let computerPick = Math.trunc(Math.random() * items.length)
let computerSelect = items[computerPick]



if(UserInput === computerSelect){
 console.log("its a TIE!")
}
else if( UserInput === 'rock' && computerSelect === 'scissor'){
 console.log("You Win!")
}
else if( UserInput === 'scissor' && computerSelect === 'rock'){
 console.log("Computer Wins!")
}
else if( UserInput === 'paper' && computerSelect === 'scissor'){
 console.log("Computer Wins!")
}
else if( UserInput === 'scissor' && computerSelect === 'paper'){
 console.log("You Win!")
}
else if( UserInput === 'paper' && computerSelect === 'rock'){
 console.log("You Win!")
}
else if( UserInput === 'rock' && computerSelect === 'paper'){
 console.log("Computer Wins!")
}  

console.log(`User Select ${UserInput} and computer Select ${computerSelect} `);