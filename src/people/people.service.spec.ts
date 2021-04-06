import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from 'src/api/api.service';
import { mockApiFunctions } from 'src/mock/mockFunctions';
import { PeopleService } from './people.service';

describe('People Service', () => {
  let service: PeopleService;
  let apiService: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PeopleService,
        {
          provide: ApiService,
          useValue: mockApiFunctions,
        },
      ],
    }).compile();

    service = module.get<PeopleService>(PeopleService);
    apiService = module.get<ApiService>(ApiService);
  });

  it('should be defined.', () => {
    expect(service).toBeDefined();
  });

  describe('personDetail', () => {
    it.todo('should get person detail.');
    it.todo('should fail if person with id does not exists.');
    it.todo('should fail on exception.');
  });

  describe('searchPeople', () => {
    it.todo('should get searched people.');
    it.todo('should fail on exception.');
  });
});
