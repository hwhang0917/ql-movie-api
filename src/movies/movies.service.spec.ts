import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from 'src/api/api.service';
import { mockApiFunctions } from 'src/mock/mockFunctions';
import { MoviesService } from './movies.service';

describe('Movies Service', () => {
  let service: MoviesService;
  let apiService: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: ApiService,
          useValue: mockApiFunctions,
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    apiService = module.get<ApiService>(ApiService);
  });

  it('should be defined.', () => {
    expect(service).toBeDefined();
  });

  describe('nowPlaying', () => {
    it.todo('should get now playing movies.');
    it.todo('should fail on exception.');
  });

  describe('upcoming', () => {
    it.todo('should get upcoming movies.');
    it.todo('should fail on exception.');
  });

  describe('popular', () => {
    it.todo('should get popular movies.');
    it.todo('should fail on exception.');
  });

  describe('movieDetail', () => {
    it.todo('should get movie detail.');
    it.todo('should fail if movie with id does not exists.');
    it.todo('should fail on exception.');
  });

  describe('searchMovie', () => {
    it.todo('should get searched movies.');
    it.todo('should fail on exception.');
  });

  describe('similarMovies', () => {
    it.todo('should get similar movies.');
    it.todo('should fail if movie with id does not exists.');
    it.todo('should fail on exception.');
  });
});
