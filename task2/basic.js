const recipesArray = [
  {
    meal: "pancakes",
    ingredients: ["eggs", "flour", "milk", "butter"],
    time: "0.5hour",
  },
  {
    meal: "tomato soup",
    ingredients: ["eggs", "flour", "milk", "butter"],
    time: "1hour",
  },
  {
    meal: "eggs with salad",
    ingredients: ["eggs", "flour", "milk", "butter"],
    time: "1hour",
  },
  {
    meal: "cake",
    ingredients: ["eggs", "flour", "milk", "butter"],
    time: "1hour",
  },
  {
    meal: "soup",
    ingredients: ["tomato", "flour", "milk", "butter"],
    time: "1hour",
  },
];



let recipeOf = prompt("Please Enter Your Favourite Dish! for Recipe");


if(!recipeOf){
  alert("Please type something sir!");
} else {
  let answer = "";
  for(let i = 0; i < recipesArray.length;i++){
    if(recipesArray[i].meal === recipeOf){
      answer = recipesArray[i];
      break;
    }
  }
  if(!answer){
    alert("Sorry Not Able To Find Your Required Dish Recipe,Please change your taste..LOL😸 ")
  }else{
    alert(`"${answer.meal} takes ${answer.time} Hrs to cook and it's ingredients are: ${answer.ingredients.join(', ')}"`);
  }
}





//=====================================================================================================================

// for(let i=0;i<recipesArray.length;i++){
//   if(recipesArray[i].meal === recipeOf){
//    let answer = recipesArray[i];
    
//     console.log(`${answer.meal} takes time ${answer.time} and ingridients are: ${answer.ingredients.join(', ')}`)
//     break;
//   }else{
//     console.log('please enter a valid question');
    
//   }
// }






