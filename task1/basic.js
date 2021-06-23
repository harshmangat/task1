let user = [
  {
    input : 'hello',
    answer : 'Hello'
  },
  {
    input : 'how are you?',
    answer :  'I am fine'
  },
  {
    input : 'who are you?',
    answer : 'I am robot'
  },
  {
    input : 'how old are you?',
    answer : 'You just created me'
  },
  {
    input : 'who created you?',
    answer : 'The best JS developer,you!'
  }
]

let userInput = prompt('write your quetion please!');



if(!userInput){
  alert("HELLO WORLD!!!");
} else {
  let answer = "";
  for(let i = 0; i < user.length;i++){
    if(user[i].input === userInput){
      answer = user[i].answer
      break;
    }
  }
  if(!answer){
    alert('sorry dont know the answer....')
  }else{
    alert(answer);
  }
}