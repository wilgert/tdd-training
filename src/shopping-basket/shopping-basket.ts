import { Item } from './item';

export class ShoppingBasket {
  constructor(private items: Item[]) {}

  total() {
    return this.items.reduce((total, item) => total + item.subtotal(), 0);
  }
}
