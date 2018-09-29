import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueriesController } from './queries/queries.controller';

@Module({
  imports: [],
  controllers: [AppController, QueriesController],
  providers: [AppService],
})
export class AppModule {}
