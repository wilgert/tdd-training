import { StockLevels } from './stock.levels';

export class GuitarShack {
  constructor(
    private alertShopManager: (productId: number) => void,
    private stockLevels: StockLevels,
    private restockLevels: { get: (productId: number) => number }
  ) {}

  buy(productId: number, quantity: number) {
    const newStockLevel = this.stockLevels.get(productId) - quantity;
    const restockLevel = this.restockLevels.get(productId);

    if (newStockLevel <= restockLevel) {
      this.alertShopManager(productId);
    }
  }
}
