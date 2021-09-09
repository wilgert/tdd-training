import { convert } from './convert';

describe('Roman numeral converter', () => {
  it('converts 1', () => {
    expect(convert(1)).toEqual('I');
  });
});
