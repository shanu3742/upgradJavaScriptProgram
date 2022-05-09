const getVowelAndConsonent = (str) => {
  if (!str) {
    return;
  }
  let lowerCaseString = str.toLowerCase();
  let vowelCount = 0;
  let consCont = 0;

  let vowelDigit = 'aeiou';
  for (let j = 0; j < lowerCaseString.length; j++) {
    if (vowelDigit.indexOf(lowerCaseString[j]) !== -1) {
      vowelCount += 1;
    } else {
      consCont += 1;
    }
  }
  console.log(
    ` first example number of vowel in string :: ${vowelCount} and number of consonent in string :: ${consCont}`
  );
};

getVowelAndConsonent('rahul');

const getVowelAndConsonent1 = (str) => {
  if (!str) {
    return;
  }
  let lowerCaseString = str.toLowerCase();
  let vowelCount = 0;
  let consCont = 0;

  let vowelDigit = 'aeiou';
  for (let j = 0; j < lowerCaseString.length; j++) {
    if (vowelDigit.includes(lowerCaseString[j])) {
      vowelCount += 1;
    } else {
      consCont += 1;
    }
  }
  console.log(
    ` second example number of vowel in string :: ${vowelCount} and number of consonent in string :: ${consCont}`
  );
};

getVowelAndConsonent1('onion');
