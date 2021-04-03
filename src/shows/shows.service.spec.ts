import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from 'src/api/api.service';
import { mockApiFunctions } from 'src/mock/mockFunctions';
import { ShowsService } from './shows.service';

describe('Shows Service', () => {
  let service: ShowsService;
  let apiService: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShowsService,
        {
          provide: ApiService,
          useValue: mockApiFunctions,
        },
      ],
    }).compile();

    service = module.get<ShowsService>(ShowsService);
    apiService = module.get<ApiService>(ApiService);
  });

  it('should be defined.', () => {
    expect(service).toBeDefined();
  });

  describe('topRated', () => {
    it.todo('should get top rated shows.');
    it.todo('should fail on exception.');
  });

  describe('popular', () => {
    it.todo('should get popular shows.');
    it.todo('should fail on exception.');
  });

  describe('airingToday', () => {
    it.todo('should get shows airing today.');
    it.todo('should fail on exception.');
  });

  describe('showDetail', () => {
    it.todo('should get show detail.');
    it.todo('should fail if show with id does not exists.');
    it.todo('should fail on exception.');
  });

  describe('searchShow', () => {
    it.todo('should get searched shows.');
    it.todo('should fail on exception.');
  });

  describe('similarShows', () => {
    it.todo('should get similar shows.');
    it.todo('should fail if show with id does not exists.');
    it.todo('should fail on exception.');
  });

  describe('seasonDetail', () => {
    it.todo('should get season detail.');
    it.todo('should fail if show with id does not exists.');
    it.todo('should fail if season number does not exists.');
    it.todo('should fail on exception.');
  });

  describe('episodeDetail', () => {
    it.todo('should get episode detail.');
    it.todo('should fail if show with id does not exists.');
    it.todo('should fail if season number does not exists.');
    it.todo('should fail if episode number does not exists.');
    it.todo('should fail on exception.');
  });
});
