function countInstance(arr, char) {
  return arr.map((str) => str.split("").filter((c) => c === char).length);
}

const answer = countInstance(["luzon", "visayas", "mindanao"], "a");
console.log(answer);
