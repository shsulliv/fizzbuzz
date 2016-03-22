import test from 'ava';
import fizzBuzz from '../index';

// Write a program that prints out the numbers from 1 to 100. However, for every number that is a multiple of 3
// print "Fizz" instead. For every number that is a multiple of 5,
// print "Buzz" instead. Finally, for every number that is a multiple
// of BOTH 3 and 5, print out "FizzBuzz".
// When it's a multiple of 7, it prints 'curls'.
// When it's a multiple of 3, 5, and 7, it prints 'fizzbuzzcurls'.
// When it's a multiple of 3 and 7, it prints 'fizzcurls'.
// When it's a multiple of 5 and 7, it prints 'buzzcurls'.

test('if the number is mulitple of 3, it returns "fizz"', t => {
  t.is(fizzBuzz(3), 'fizz');
  t.is(fizzBuzz(6), 'fizz');
});

test('if the number is a multiple of 5, it returns "buzz"', t => {
  t.is(fizzBuzz(5), 'buzz');
  t.is(fizzBuzz(10), 'buzz');
});

test('if the number is not a multiple of 3 or 5, it should return the number', t => {
  t.is(fizzBuzz(4), 4);
});

test('if the number is a multiple of both 3 and 5, it returns"fizzbuzz"', t => {
  t.is(fizzBuzz(15), 'fizzbuzz');
  t.is(fizzBuzz(30), 'fizzbuzz');
});

test('if the number is a multiple of 7, it returns "curls"', t => {
  t.is(fizzBuzz(7), 'curls');
  t.is(fizzBuzz(14), 'curls');
});

test('if the number is a multiple of 3 and 7, it returns "fizzcurls"', t => {
  t.is(fizzBuzz(21), 'fizzcurls');
  t.is(fizzBuzz(42), 'fizzcurls');
});

test('if the number is a multiple of 5 and 7, it returns "buzzcurls"', t => {
  t.is(fizzBuzz(35), 'buzzcurls');
  t.is(fizzBuzz(70), 'buzzcurls');
});

test('if the number is a multiple of 3, 5 and 7, it returns "fizzbuzzcurls"', t => {
  t.is(fizzBuzz(105), 'fizzbuzzcurls');
  t.is(fizzBuzz(210), 'fizzbuzzcurls');
});
