import { Item } from './item';
import { ShoppingBasket } from './shopping-basket';

describe('Shopping Basket', () => {
  it('should return zero when basket is empty', () => {
    const basket = new ShoppingBasket([]);
    expect(basket.total()).toStrictEqual(0.0);
  });

  it('should return 10 for one item priced 10', () => {
    const basket = new ShoppingBasket([new Item(10, 1)]);

    expect(basket.total()).toEqual(10);
  });

  it('should have total of sum of two single items', () => {
    const basket = new ShoppingBasket([new Item(100, 1), new Item(50, 1)]);
    expect(basket.total()).toEqual(150);
  });

  it('should correctly add up item with quantity > 1', () => {
    let basket = new ShoppingBasket([new Item(21, 2)]);
    expect(basket.total()).toEqual(42);
  });

  it('should correctly add up multiple items with quantity > 1', () => {
    let basket = new ShoppingBasket([new Item(20, 1), new Item(11, 2)]);
    expect(basket.total()).toEqual(42);
  });
});
