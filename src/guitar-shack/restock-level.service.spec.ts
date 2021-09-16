import { ProductInfoProvider } from './product-info.provider';
import { RestockLevelService } from './restock-level.service';

describe('RestockLevelService', () => {
  it('should retrieve productInfo', () => {
    let productId = 42;
    let productInfoService: ProductInfoProvider = { get: jest.fn() };

    let restockLevelService = new RestockLevelService(productInfoService);
    restockLevelService.get(productId);

    expect(productInfoService.get).toHaveBeenCalledWith(productId);
  });
});
