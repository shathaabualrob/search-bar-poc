import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReceiptService } from './receipt.service';
import { Receipt } from './entities/receipt.entity';
import { CreateReceiptInput } from './dto/create-receipt.input';
import { UpdateReceiptInput } from './dto/update-receipt.input';

@Resolver(() => Receipt)
export class ReceiptResolver {
  constructor(private readonly receiptService: ReceiptService) {}

  @Mutation(() => Receipt)
  createReceipt(@Args('createReceiptInput') createReceiptInput: CreateReceiptInput) {
    return this.receiptService.create(createReceiptInput);
  }

  @Query(() => [Receipt], { name: 'receipt' })
  findAll() {
    return this.receiptService.findAll();
  }

  @Query(() => Receipt, { name: 'receipt' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.receiptService.findOne(id);
  }

  @Mutation(() => Receipt)
  updateReceipt(@Args('updateReceiptInput') updateReceiptInput: UpdateReceiptInput) {
    return this.receiptService.update(updateReceiptInput.id, updateReceiptInput);
  }

  @Mutation(() => Receipt)
  removeReceipt(@Args('id', { type: () => Int }) id: number) {
    return this.receiptService.remove(id);
  }
}
