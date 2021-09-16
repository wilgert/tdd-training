import { Product } from './product';

export interface ProductService {
  get: (productId: number) => Product;
}
