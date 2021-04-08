import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from 'src/api/api.service';
import { errorMessage } from 'src/errors/errors';
import { mockApiFunctions, MockApiService } from 'src/mock/mockFunctions';
import { mockError, mockNotFound } from 'src/mock/mockOutputs';
import { PeopleService } from './people.service';

// Mock I/Os
const mockQuery = 'test';
const mockPersonId = 0;
const mockPerson = {
  id: mockPersonId,
  name: 'testPerson',
};
const mockPeople = [mockPerson, mockPerson];

// TEST
describe('People Service', () => {
  let service: PeopleService;
  let apiService: MockApiService;

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
    apiService = module.get(ApiService);
  });

  it('should be defined.', () => {
    expect(service).toBeDefined();
  });

  describe('personDetail', () => {
    it('should get person detail.', async () => {
      apiService.people.findPersonById.mockResolvedValue(mockPerson);
      const result = await service.personDetail(mockPersonId);

      expect(apiService.people.findPersonById).toHaveBeenCalled();
      expect(apiService.people.findPersonById).toHaveBeenCalledWith(
        mockPersonId,
      );
      expect(result).toEqual({ ok: true, person: mockPerson });
    });

    it('should fail if person with id does not exists.', async () => {
      apiService.people.findPersonById.mockResolvedValue(mockNotFound);
      const result = await service.personDetail(mockPersonId);

      expect(apiService.people.findPersonById).toHaveBeenCalled();
      expect(apiService.people.findPersonById).toHaveBeenCalledWith(
        mockPersonId,
      );
      expect(result).toEqual({ ok: false, error: errorMessage.personNotFound });
    });

    it('should fail on exception.', async () => {
      apiService.people.findPersonById.mockRejectedValue(mockError);
      const result = await service.personDetail(mockPersonId);

      expect(apiService.people.findPersonById).toHaveBeenCalled();
      expect(apiService.people.findPersonById).toHaveBeenCalledWith(
        mockPersonId,
      );
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });

  describe('searchPeople', () => {
    it('should get searched people.', async () => {
      apiService.search.person.mockResolvedValue(mockPeople);
      const result = await service.searchPeople(mockQuery);

      expect(apiService.search.person).toHaveBeenCalled();
      expect(apiService.search.person).toHaveBeenCalledWith(mockQuery);
      expect(result).toEqual({ ok: true, people: mockPeople });
    });

    it('should fail on exception.', async () => {
      apiService.search.person.mockRejectedValue(mockError);
      const result = await service.searchPeople(mockQuery);

      expect(apiService.search.person).toHaveBeenCalled();
      expect(apiService.search.person).toHaveBeenCalledWith(mockQuery);
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });
});
