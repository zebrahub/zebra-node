import { Controller, Get } from '@nestjs/common';
import { QueriesService } from './queries.service';

@Controller('queries')
export class QueriesController {
  constructor(private readonly queriesService: QueriesService) {}

  @Get()
  root(): string {
    this.queriesService.findAll();
    // tslint:disable-next-line
    console.log(
      'TCL: QueriesController -> constructor -> this.queriesService.findAll()',
      this.queriesService.findAll(),
    );
    return 'Hello Query';
  }
}
