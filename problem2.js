function returnDivisibleBy3(arr) {
  return arr.map((num) => num * num + 2).filter((num) => num % 3 === 0);
}
//this code defines a function called returnDivisibleBy3 that takes an array of numbers as an argument.
//The map method is used to multiply each number by itself and add 2.
//The function returns an array of numbers that are divisible by 3 when multiplied by themselves plus 2.
//The filter method is used to filter out the numbers that are not divisible by 3.

const answer = returnDivisibleBy3([21, 11, -14, 34, 42, 56]);
//The result is an array of numbers that are divisible by 3 when multiplied by themselves plus 2.
console.log(answer);
