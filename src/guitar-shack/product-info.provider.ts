import { Product } from './product';

export interface ProductInfoProvider {
  get: (productId: number) => Product;
}
