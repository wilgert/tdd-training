export function convert(input: number): string {
  const characters = 'IVXLCDM';
  let output = '';
  let digits = input
    .toString()
    .split('')
    .reverse()
    .map((x) => parseInt(x, 10));

  digits.forEach((digit, index) => {
    output = convertDigit(digits[index], characters.slice(index * 2)) + output;
  });

  return output;
}

function convertDigit(input: number, characters: string) {
  let output = '';

  if (input < 4) {
    output = characters[0].repeat(input);
  }

  if (input === 4) {
    output = characters[0] + characters[1];
  }

  if (input >= 5 && input < 9) {
    output = characters[1] + characters[0].repeat(input - 5);
  }

  if (input === 9) {
    output = characters[0] + characters[2];
  }
  return output;
}
