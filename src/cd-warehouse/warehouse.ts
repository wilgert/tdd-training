import { Stock } from './stock';

export class Warehouse {
  constructor(private stock: Stock) {}

  getStock() {
    return this.stock;
  }

  addCds(stockItems: { copies: number; title: string }[]) {
    stockItems.forEach((stockItem) => {
      if (!this.stock[stockItem.title]) {
        this.stock[stockItem.title] = 0;
      }

      this.stock[stockItem.title] += stockItem.copies;
    });
  }

  buyCd(title: string) {
    this.stock[title]--;
  }
}
