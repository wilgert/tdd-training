interface Stock {
  [key: string]: number;
}

class WareHouse {
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
}

describe('cd warehouse', () => {
  describe('record label', () => {
    describe(`send batch of cd's`, () => {
      describe('send 1 copy of a cd that is new', () => {
        it('adds the cd', () => {
          const warehouse = new WareHouse({});
          warehouse.addCds([{ title: 'Elephant', copies: 1 }]);
          expect(warehouse.getStock()).toEqual({ Elephant: 1 });
        });
      });

      describe('send 1 copy of a cd that already exists', () => {
        it('increases stock count', () => {});
      });
    });
  });
});
