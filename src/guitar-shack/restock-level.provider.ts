export interface RestockLevelProvider {
  get: (productId: number) => number;
}
