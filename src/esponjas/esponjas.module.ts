import { Module } from '@nestjs/common';
import { EsponjasService } from './esponjas.service';
import { EsponjasController } from './esponjas.controller';

@Module({
  controllers: [EsponjasController],
  providers: [EsponjasService],
})
export class EsponjasModule {}
