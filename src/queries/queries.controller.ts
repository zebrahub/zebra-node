import { Controller, Get } from '@nestjs/common';

@Controller('queries')
export class QueriesController {
  @Get()
  root(): string {
    return 'Hello Query';
  }
}
