function countInstance(arr, char) {
  return arr.map((str) => str.split("").filter((c) => c === char).length);
}
//this code defines a function called countInstance that takes an array of strings and a character as arguments.
//The map method is used to split each string into an array of characters.
//The filter method is used to count the number of times the character appears in each string.

const answer = countInstance(["luzon", "visayas", "mindanao"], "a");
//The result is an array of numbers that represent the number of times the character appears in each string.
console.log(answer);
