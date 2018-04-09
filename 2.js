function stringReformatting(s,k){
  let filteredString = s.split('').filter(str => str!=='-').reverse()
  let newString = []
  for(let i = filteredString.length-1; i >= 0; i--){
    newString.push(filteredString[i])
    if(i % k === 0 && i > 0) newString.push('-')
  }
  return newString.join('')
}

