module.exports = (string, startToken, endToken) => {
  let currentStartToken = '';
  let sentences = [];

  for (let letterIndex = 0; letterIndex < string.length; letterIndex++) {
    currentStartToken = currentStartToken + string[letterIndex];
    if (currentStartToken.length > startToken.length) {
      currentStartToken = currentStartToken.substring(1);
    }

    if (currentStartToken === startToken) {
      const restOfString = string.substring(letterIndex + 1);
      sentences.push(currentStartToken + findBody(endToken, restOfString));
    }
  }

  return sentences;
}

const findBody = (endToken, string) => {
  let currentEndToken = '';
  let sentence = '';

  for (let letterIndex = 0; letterIndex < string.length; letterIndex++) {
    currentEndToken = currentEndToken + string[letterIndex];
    sentence = sentence + string[letterIndex];

    if (currentEndToken.length > endToken.length) {
      currentEndToken = currentEndToken.substring(1);
    }

    if (currentEndToken === endToken) {
      break;
    }
  }

  return sentence;
}
