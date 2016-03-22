function fizzBuzz(n) {
  var threes = 'fizz';
  var fives = 'buzz';
  var sevens = 'curls';
  var myString = '';

  if (n % 3 === 0) {
    myString += threes;
  }

  if (n % 5 === 0) {
    myString += fives;
  }

  if (n % 7 === 0) {
    myString += sevens;
  }

  return myString || n;
}

module.exports = fizzBuzz;
