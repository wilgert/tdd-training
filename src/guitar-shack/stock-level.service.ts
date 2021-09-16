import { ProductService } from './product.service';
import { StockLevels } from './stock.levels';

export class StockLevelService implements StockLevels {
  constructor(private productService: ProductService) {}

  get(productId: number) {
    this.productService.get(productId);

    return 0;
  }
}
