import { StockLevelService } from './stock-level.service';
import { Product } from './product';
import { ProductService } from './product.service';

describe('ProductStockLevels', () => {
  it('retrieves productInfo', () => {
    let productId = 42;
    const stockLevel = 69;
    let productService: ProductService = {
      get: jest.fn().mockReturnValue(new Product(stockLevel, productId)),
    };

    let stockLevelService = new StockLevelService(productService);
    stockLevelService.get(productId);

    expect(productService.get).toHaveBeenCalledWith(productId);
  });
});
