import { GuitarShack } from './guitar-shack';
import { StockLevelProvider } from './stock-level.provider';
import { RestockLevelProvider } from './restock-level.provider';

describe('Guitar Shack', () => {
  it('does not send alert when stock after sale above restock level', () => {
    const alertShopManager = jest.fn();

    let stockLevels: StockLevelProvider = { get: jest.fn().mockReturnValue(4) };
    let restockLevels = { get: jest.fn().mockReturnValue(2) };

    let guitarShack = new GuitarShack(
      alertShopManager,
      stockLevels,
      restockLevels
    );
    guitarShack.buy(42, 1);

    expect(alertShopManager).not.toHaveBeenCalled();
  });

  it.each`
    quantity
    ${2}
    ${3}
  `(
    'sends alert when stock after sale equal or below restock level',
    ({ quantity }) => {
      const alertShopManager = jest.fn();

      let stockLevels: StockLevelProvider = {
        get: jest.fn().mockReturnValue(4),
      };
      let restockLevels = { get: jest.fn().mockReturnValue(2) };

      let guitarShack = new GuitarShack(
        alertShopManager,
        stockLevels,
        restockLevels
      );
      let productId = 42;

      guitarShack.buy(productId, quantity);

      expect(alertShopManager).toHaveBeenCalledWith(productId);
    }
  );
});
