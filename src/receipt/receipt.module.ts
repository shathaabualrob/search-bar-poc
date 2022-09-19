import { Module } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { ReceiptResolver } from './receipt.resolver';

@Module({
  providers: [ReceiptResolver, ReceiptService]
})
export class ReceiptModule {}
