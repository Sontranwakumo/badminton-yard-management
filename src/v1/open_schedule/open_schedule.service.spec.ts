import { Test, TestingModule } from '@nestjs/testing';
import { OpenScheduleService } from './open_schedule.service.js';
import { IMPORT_MODULES } from '../../../test/utils/utils.js';
import { OpenScheduleModule } from './open_schedule.module.js';

describe('OpenScheduleService', () => {
  let service: OpenScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[...IMPORT_MODULES,OpenScheduleModule]
    }).compile();

    service = module.get<OpenScheduleService>(OpenScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
