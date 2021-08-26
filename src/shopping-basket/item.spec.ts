import { Item } from './item';

describe('Item', () => {
  it('throws an error when quantity is 0', () => {
    expect(() => new Item(1, -1)).toThrow('Quantity cannot be negative');
  });
});
