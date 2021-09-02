import { Warehouse } from './warehouse';

describe('cd warehouse', () => {
  describe('record label', () => {
    describe(`send batch of cd's`, () => {
      describe('send 1 copy of a cd that is new', () => {
        it('adds the cd', () => {
          const warehouse = new Warehouse({});
          warehouse.addCds([{ title: 'Elephant', copies: 1 }]);
          expect(warehouse.getStock()).toEqual({ Elephant: 1 });
        });
      });

      describe('send 1 copy of a cd that already exists', () => {
        it('increases stock count', () => {
          const warehouse = new Warehouse({
            'Hooray for the Boobies': 1,
          });
          warehouse.addCds([{ title: 'Hooray for the Boobies', copies: 1 }]);
          expect(warehouse.getStock()).toEqual({ 'Hooray for the Boobies': 2 });
        });
      });

      describe('send multiple copies of a cd that is new', () => {
        it('adds to stock', () => {
          const warehouse = new Warehouse({});
          warehouse.addCds([{ title: 'Elephant', copies: 3 }]);
          expect(warehouse.getStock()).toEqual({ Elephant: 3 });
        });
      });
    });
  });

  describe('customer', () => {
    describe('buy cd', () => {
      describe('cd is in stock', () => {
        it('decreases stock count', () => {
          const warehouse = new Warehouse({ 'Hooray for the Boobies': 1 });
          warehouse.buyCd('Hooray for the Boobies');
          expect(warehouse.getStock()).toEqual({ 'Hooray for the Boobies': 0 });
        });
      });

      describe('cd is not in stock', () => {
        it('returns an error', () => {
          let warehouse = new Warehouse({});
          expect(() => warehouse.buyCd('Hooray for the Boobies')).toThrow(
            'This cd is not in stock'
          );
        });
      });
    });
  });
});
