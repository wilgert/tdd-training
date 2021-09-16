import { StockLevelProvider } from './stock-level.provider';

export class GuitarShack {
  constructor(
    private alertShopManager: (productId: number) => void,
    private stockLevels: StockLevelProvider,
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
