import { StockLevelService } from './stock-level.service';
import { Product } from './product';
import { ProductInfoProvider } from './product-info.provider';

describe('ProductStockLevels', () => {
  let result: number;
  let stockLevel: number;
  let productId: number;
  let productService: ProductInfoProvider;
  let stockLevelService: StockLevelService;

  beforeEach(() => {
    productId = 42;
    stockLevel = 69;

    productService = {
      get: jest.fn().mockReturnValue(new Product(stockLevel, productId)),
    };
    stockLevelService = new StockLevelService(productService);
    result = stockLevelService.get(productId);
  });

  it('retrieves productInfo', () => {
    expect(productService.get).toHaveBeenCalledWith(productId);
  });

  it('returns the stock level', () => {
    expect(result).toEqual(stockLevel);
  });
});
