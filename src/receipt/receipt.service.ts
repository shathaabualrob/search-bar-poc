import { Injectable } from '@nestjs/common';
import { CreateReceiptInput } from './dto/create-receipt.input';
import { UpdateReceiptInput } from './dto/update-receipt.input';

@Injectable()
export class ReceiptService {
  create(createReceiptInput: CreateReceiptInput) {
    return 'This action adds a new receipt';
  }

  findAll() {
    return `This action returns all receipt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receipt`;
  }

  update(id: number, updateReceiptInput: UpdateReceiptInput) {
    return `This action updates a #${id} receipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}
