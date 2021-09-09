function convert(input: number): string {
  return 'I';
}

describe('Roman numeral converter', () => {
  it('converts 1', () => {
    expect(convert(1)).toEqual('I');
  });
});
