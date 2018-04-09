function sumOfTwo(a,b,v){
  let aSet = new Set(a);
  for(let num of b){
    let compliment = v - num;
    if(aSet.has(compliment)){
      return true;
    }
  }
  return false;
}
//Fairly easy. Create a set from either of the arrays because it won't matter if theres for example
//if v= 7, it won't matter if a had multiple 5's if b doesn't have a 2. I then loop over the other array
//checking if the difference between v and the integer at that point is in the Set of a.