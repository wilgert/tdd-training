export function convert(input: number): string {
  if (input < 4) {
    return 'I'.repeat(input);
  } else if (input === 4) {
    return 'IV';
  } else {
    return 'V' + 'I'.repeat(input - 5);
  }
}
