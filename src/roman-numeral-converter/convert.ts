export function convert(input: number): string {
  const characters = 'IVXLCDM';
  let output = '';

  if (input < 4) {
    output = characters[0].repeat(input);
  }

  if (input === 4) {
    output = characters[0] + characters[1];
  }

  if (input >= 5) {
    output = characters[1] + characters[0].repeat(input - 5);
  }

  return output;
}
