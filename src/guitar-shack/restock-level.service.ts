import { RestockLevelProvider } from './restock-level.provider';
import { ProductInfoProvider } from './product-info.provider';

export class RestockLevelService implements RestockLevelProvider {
  constructor(private productInfoService: ProductInfoProvider) {}

  get(productId: number): number {
    this.productInfoService.get(productId);
    return 0;
  }
}
