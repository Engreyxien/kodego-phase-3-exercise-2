function returnDivisibleBy3(arr) {
  return arr.map((num) => num * num + 2).filter((num) => num % 3 === 0);
}

const answer = returnDivisibleBy3([21, 11, 14, 34, 42, 56]);
// console.log(answer) ---> "[3, 6, 18, 27]"
console.log(answer);
