import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptResolver } from './receipt.resolver';
import { ReceiptService } from './receipt.service';

describe('ReceiptResolver', () => {
  let resolver: ReceiptResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiptResolver, ReceiptService],
    }).compile();

    resolver = module.get<ReceiptResolver>(ReceiptResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
