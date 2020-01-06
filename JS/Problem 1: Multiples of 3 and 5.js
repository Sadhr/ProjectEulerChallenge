function multiplesOf3and5(number) {
  // Good luck!
  let sum = 0;
  for(let i = 1; i < number; i++){
    let mul3 = i % 3;
    let mul5 = i % 5;
    if(mul3 === 0 || mul5 === 0){
      sum += i;
    }
  }
  return sum;
}

console.log(multiplesOf3and5(1000))
