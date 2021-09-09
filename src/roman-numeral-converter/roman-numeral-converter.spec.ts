import { convert } from './convert';

describe('Roman numeral converter', () => {
  it.each`
    input | expected
    ${1}  | ${'I'}
    ${2}  | ${'II'}
  `('converts $input to "$expected"', ({ input, expected }) => {
    expect(convert(input)).toEqual(expected);
  });
});
