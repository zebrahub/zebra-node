import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueriesController } from './queries/queries.controller';
import { QueriesService } from './queries/queries.service';
import { QueriesModule } from 'queries/queries.module';

@Module({
  imports: [TypeOrmModule.forRoot(), QueriesModule],
  controllers: [AppController, QueriesController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
