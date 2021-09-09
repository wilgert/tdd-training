export function convert(input: number): string {
  if (input < 4) {
    return 'I'.repeat(input);
  } else {
    return 'IV';
  }
}
