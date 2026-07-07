import { Module } from '@nestjs/common';
import { ForrosService } from './forros.service';
import { ForrosController } from './forros.controller';

@Module({
  controllers: [ForrosController],
  providers: [ForrosService],
})
export class ForrosModule {}
