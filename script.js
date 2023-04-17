let button= document.querySelector(".button");
let result = document.querySelector(".result");
let input1 = document.querySelector(".input1")

button.onclick=function(){
  result.style.display="block";
  let userInput = input1.value
  console.log(userInput)

  if(userInput == 10 || userInput == 9 && userInput2 == 1 && userInput2 < 10){
  result.innerHTML='You are Doritos'
    
}

else if(userInput == 15 || userInput == 18 && userInput2 == 14 && userInput2 < 15){
    result.innerHTML= 'You are Takis'
  }
};

  


