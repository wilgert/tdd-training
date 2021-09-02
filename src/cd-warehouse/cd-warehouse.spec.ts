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
        it('increases stock count', () => {});
      });
    });
  });
});
