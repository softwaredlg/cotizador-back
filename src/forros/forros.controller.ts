import { Controller } from '@nestjs/common';
import { ForrosService } from './forros.service';

@Controller('forros')
export class ForrosController {
  constructor(private readonly forrosService: ForrosService) {}
}
