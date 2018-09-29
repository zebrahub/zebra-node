import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueriesService } from './queries.service';
import { QueriesController } from './queries.controller';
import { Query } from './queries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Query])],
  providers: [QueriesService],
  controllers: [QueriesController],
})
export class QueriesModule {}
