function fizzBuzz(number) {
  var rules = [
    { matcher: (x) => x % 3 === 0, word: 'fizz'},
    { matcher: (x) => x % 5 === 0, word: 'buzz'},
    { matcher: (x) => x % 7 === 0, word: 'curls'}
  ];

  var word = rules
              .filter(rule => rule.matcher(number))
              .map(rule => rule.word)
              .join('');

  return word || number;
}

module.exports = fizzBuzz;
