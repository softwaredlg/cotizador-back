import { Module } from '@nestjs/common';
import { QuotationEngineService } from './quotation-engine.service';
import { QuotationEngineController } from './quotation-engine.controller';

@Module({
  controllers: [QuotationEngineController],
  providers: [QuotationEngineService],
})
export class QuotationEngineModule {}
