let test = 50;

module.exports = function toReadable (number) {
// function toReadable(number) {
  const Numerals = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million'
  };
  const numberStr = number.toString();
  let copyNumber = number;
  let readableStr = '';
  // console.log(copyNumber)
  if (copyNumber >= 100 && copyNumber <= 999) {
    let hundreds = Numerals[copyNumber.toString()[0]];
    
    readableStr = `${hundreds} hundred`;
    copyNumber -= (copyNumber.toString()[0] * 100);
  }
  // console.log(copyNumber)
  
  if (copyNumber > 20 && copyNumber <= 99) {
    let tens = Numerals[copyNumber.toString()[0] * 10];
    let units = Numerals[copyNumber.toString()[1]];
    
    if (units === 'zero') units = '';
    
    readableStr = `${readableStr} ${tens} ${units}`;
  }
  // console.log(copyNumber)
  
  if (copyNumber >= 0 && copyNumber <= 20) {
    let currentNum = Numerals[copyNumber];
    if (currentNum === 'zero' && readableStr.length !== 0) currentNum = '';
    readableStr = `${readableStr} ${currentNum}`;
  };

  return readableStr.trim();
}

// for (let i = 0; i <= 99; i += 1) {
//   console.log(toReadable(i));
// }
// console.log(toReadable(0));
