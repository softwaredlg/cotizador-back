import { Controller } from '@nestjs/common';
import { EsponjasService } from './esponjas.service';

@Controller('esponjas')
export class EsponjasController {
  constructor(private readonly esponjasService: EsponjasService) {}
}
