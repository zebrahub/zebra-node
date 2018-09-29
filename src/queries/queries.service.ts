import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Query } from './queries.entity';

@Injectable()
export class QueriesService {
  constructor(
    @InjectRepository(Query)
    private readonly queriesRepository: Repository<Query>,
  ) {}

  async findAll(): Promise<Query[]> {
    return await this.queriesRepository.find();
  }
}
