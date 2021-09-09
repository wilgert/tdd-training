import { convert } from './convert';

describe('Roman numeral converter', () => {
  it.each`
    input   | expected
    ${1}    | ${'I'}
    ${2}    | ${'II'}
    ${3}    | ${'III'}
    ${4}    | ${'IV'}
    ${5}    | ${'V'}
    ${6}    | ${'VI'}
    ${7}    | ${'VII'}
    ${8}    | ${'VIII'}
    ${9}    | ${'IX'}
    ${10}   | ${'X'}
    ${50}   | ${'L'}
    ${55}   | ${'LV'}
    ${90}   | ${'XC'}
    ${100}  | ${'C'}
    ${1000} | ${'M'}
    ${1500} | ${'MD'}
    ${3999} | ${'MMMCMXCIX'}
  `('converts $input to "$expected"', ({ input, expected }) => {
    expect(convert(input)).toEqual(expected);
  });
});
