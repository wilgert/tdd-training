export interface StockLevelProvider {
  get: (productId: number) => number;
}
