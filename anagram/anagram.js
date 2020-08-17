const anagram = (stringA, stringB) => {
  const cleanString = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z\d]/g, '')
      .split('')
      .sort()
      .join('');
  };
  return cleanString(stringA) == cleanString(stringB);
};

module.exports = anagram;
