const anagram = require('./anagram');

test('checks if "bleat" and "table" are anagrams', () => {
  expect(anagram('bleat', 'table')).toBeTruthy();
});
test('checks if "eat" and "tar" are anagrams', () => {
  expect(anagram('eat', 'tar')).toBeFalsy();
});
