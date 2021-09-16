import { ProductInfoProvider } from './product-info.provider';
import { StockLevelProvider } from './stock-level.provider';

export class StockLevelService implements StockLevelProvider {
  constructor(private productService: ProductInfoProvider) {}

  get(productId: number) {
    const { stockLevel } = this.productService.get(productId);

    return stockLevel;
  }
}
