import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from 'src/api/api.service';
import { errorMessage } from 'src/errors/errors';
import { mockApiFunctions, MockApiService } from 'src/mock/mockFunctions';
import { mockError, mockNotFound } from 'src/mock/mockOutputs';
import { MoviesService } from './movies.service';

// Mock I/Os
const mockQuery = 'testMovie';
const mockMovieId = 0;
const mockMovie = {
  id: mockMovieId,
  title: 'testMovie',
};
const mockMovies = [mockMovie, mockMovie];

// TEST
describe('Movies Service', () => {
  let service: MoviesService;
  let apiService: MockApiService;

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
    apiService = module.get(ApiService);
  });

  it('should be defined.', () => {
    expect(service).toBeDefined();
  });

  describe('nowPlaying', () => {
    it('should get now playing movies.', async () => {
      apiService.movies.nowPlaying.mockResolvedValue(mockMovies);
      const result = await service.nowPlaying();

      expect(apiService.movies.nowPlaying).toHaveBeenCalled();
      expect(result).toEqual({ ok: true, movies: mockMovies });
    });

    it('should fail on exception.', async () => {
      apiService.movies.nowPlaying.mockRejectedValue(mockError);
      const result = await service.nowPlaying();

      expect(apiService.movies.nowPlaying).toHaveBeenCalled();
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });

  describe('upcoming', () => {
    it('should get upcoming movies.', async () => {
      apiService.movies.upcoming.mockResolvedValue(mockMovies);
      const result = await service.upcoming();

      expect(apiService.movies.upcoming).toHaveBeenCalled();
      expect(result).toEqual({ ok: true, movies: mockMovies });
    });

    it('should fail on exception.', async () => {
      apiService.movies.upcoming.mockRejectedValue(mockError);
      const result = await service.upcoming();

      expect(apiService.movies.upcoming).toHaveBeenCalled();
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });

  describe('popular', () => {
    it('should get popular movies.', async () => {
      apiService.movies.popular.mockResolvedValue(mockMovies);
      const result = await service.popular();

      expect(apiService.movies.popular).toHaveBeenCalled();
      expect(result).toEqual({ ok: true, movies: mockMovies });
    });

    it('should fail on exception.', async () => {
      apiService.movies.popular.mockRejectedValue(mockError);
      const result = await service.popular();

      expect(apiService.movies.popular).toHaveBeenCalled();
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });

  describe('movieDetail', () => {
    it('should get movie detail.', async () => {
      apiService.movies.findById.mockResolvedValue(mockMovie);
      const result = await service.movieDetail(mockMovieId);

      expect(apiService.movies.findById).toHaveBeenCalled();
      expect(apiService.movies.findById).toHaveBeenCalledWith(mockMovieId);
      expect(result).toEqual({ ok: true, movie: mockMovie });
    });

    it('should fail if movie with id does not exists.', async () => {
      apiService.movies.findById.mockResolvedValue(mockNotFound);
      const result = await service.movieDetail(mockMovieId);

      expect(apiService.movies.findById).toHaveBeenCalled();
      expect(apiService.movies.findById).toHaveBeenCalledWith(mockMovieId);
      expect(result).toEqual({ ok: false, error: errorMessage.movieNotFound });
    });

    it('should fail on exception.', async () => {
      apiService.movies.findById.mockRejectedValue(mockError);
      const result = await service.movieDetail(mockMovieId);

      expect(apiService.movies.findById).toHaveBeenCalled();
      expect(apiService.movies.findById).toHaveBeenCalledWith(mockMovieId);
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });

  describe('searchMovie', () => {
    it('should get searched movies.', async () => {
      apiService.search.movie.mockResolvedValue(mockMovies);
      const result = await service.searchMovie(mockQuery);

      expect(apiService.search.movie).toHaveBeenCalled();
      expect(apiService.search.movie).toHaveBeenCalledWith(mockQuery);
      expect(result).toEqual({ ok: true, movies: mockMovies });
    });

    it('should fail on exception.', async () => {
      apiService.search.movie.mockRejectedValue(mockError);
      const result = await service.searchMovie(mockQuery);

      expect(apiService.search.movie).toHaveBeenCalled();
      expect(apiService.search.movie).toHaveBeenCalledWith(mockQuery);
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });

  describe('similarMovies', () => {
    it('should get similar movies.', async () => {
      apiService.movies.findSimilarById.mockResolvedValue(mockMovies);
      const result = await service.similarMovies(mockMovieId);

      expect(apiService.movies.findSimilarById).toHaveBeenCalled();
      expect(apiService.movies.findSimilarById).toHaveBeenCalledWith(
        mockMovieId,
      );
      expect(result).toEqual({ ok: true, movies: mockMovies });
    });

    it('should fail if movie with id does not exists.', async () => {
      apiService.movies.findSimilarById.mockResolvedValue(mockNotFound);
      const result = await service.similarMovies(mockMovieId);

      expect(apiService.movies.findSimilarById).toHaveBeenCalled();
      expect(apiService.movies.findSimilarById).toHaveBeenCalledWith(
        mockMovieId,
      );
      expect(result).toEqual({ ok: false, error: errorMessage.movieNotFound });
    });

    it('should fail on exception.', async () => {
      apiService.movies.findSimilarById.mockRejectedValue(mockError);
      const result = await service.similarMovies(mockMovieId);

      expect(apiService.movies.findSimilarById).toHaveBeenCalled();
      expect(apiService.movies.findSimilarById).toHaveBeenCalledWith(
        mockMovieId,
      );
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });
});
