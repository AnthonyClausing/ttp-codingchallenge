function getClosingParen(sentence, openingParenIndex){
  let openParenArray = [];
  for(let i = openingParenIndex + 1; i < sentence.length; i++){
    if(sentence[i] === ')' && openParenArray.length === 0){
      return i
    }
    if(sentence[i] === ')' && openParenArray.length > 0){
      openParenArray.pop()
    }
    if(sentence[i] ==='('){
      openParenArray.push(sentence[i])
    }
  }
}
//I decided it might be a good idea to keep track of how many open parenthesis I pass by during the loop
//so I push them into an array that gets popped every time a corresponding closing parenthesis is found
//as well as checking if the closing parenthesis I'm currently on is the one we want



