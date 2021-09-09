import { convert } from './convert';
/*
X converts 1 -> I
x converts 2 -> II
x converts 3 -> III
x converts 4 -> IV
x converts 5 -> V
converts 6 -> VI
converts 7 -> VII
converts 8 -> IIX
converts 9 -> IX
converts 10 -> X
...
converts 3999
*/

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
  `('converts $input to "$expected"', ({ input, expected }) => {
    expect(convert(input)).toEqual(expected);
  });
});
