class WareHouse {
  getStock() {
    return { Elephant: 1 };
  }
}

describe('cd warehouse', () => {
  describe('Record label', () => {
    describe(`Send batch of cd's`, () => {
      describe('send 1 copy of a cd that is new', () => {
        it('adds the cd', () => {
          const warehouse = new WareHouse();
          expect(warehouse.getStock()).toEqual({ Elephant: 1 });
        });
      });

      describe('send 1 copy of a cd that already exists', () => {
        it('increases stock count', () => {});
      });
    });
  });
});
