import { Test, TestingModule } from '@nestjs/testing';
import { QueriesController } from './queries.controller';

describe('Queries Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [QueriesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: QueriesController = module.get<QueriesController>(QueriesController);
    expect(controller).toBeDefined();
  });
});
