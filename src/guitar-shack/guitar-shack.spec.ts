import { GuitarShack } from './guitar.shack';

describe('Guitar Shack', () => {
  it('does not send alert when stock after sale above restock level', () => {
    const alertShopManager = jest.fn();

    let stockLevels = { get: jest.fn().mockReturnValue(4) };
    let restockLevels = { get: jest.fn().mockReturnValue(2) };

    let guitarShack = new GuitarShack(
      alertShopManager,
      stockLevels,
      restockLevels
    );
    let productId = 42;
    let quantity = 1;

    guitarShack.buy(productId, quantity);

    expect(alertShopManager).not.toHaveBeenCalled();
  });
});
