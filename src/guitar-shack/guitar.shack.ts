export class GuitarShack {
  constructor(
    private alertShopManager: (productId: number) => void,
    private stockLevels: { get: (productId: number) => number },
    private restockLevels: { get: (productId: number) => number }
  ) {}

  buy(productId: number, quantity: number) {}
}
