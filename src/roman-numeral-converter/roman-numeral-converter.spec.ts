import { convert } from './convert';

describe('Roman numeral converter', () => {
  it.each`
    input | expected
    ${1}  | ${'I'}
    ${2}  | ${'II'}
    ${3}  | ${'III'}
    ${4}  | ${'IV'}
    ${5}  | ${'V'}
    ${6}  | ${'VI'}
    ${7}  | ${'VII'}
    ${8}  | ${'VIII'}
    ${9}  | ${'IX'}
  `('converts $input to "$expected"', ({ input, expected }) => {
    expect(convert(input)).toEqual(expected);
  });
});
