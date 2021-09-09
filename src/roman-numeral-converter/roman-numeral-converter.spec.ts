import { convert } from './convert';

describe('Roman numeral converter', () => {
  it('converts 1 to "I"', () => {
    expect(convert(1)).toEqual('I');
  });

  it('converts 2 to "II"', () => {
    expect(convert(2)).toEqual('II');
  });
});
