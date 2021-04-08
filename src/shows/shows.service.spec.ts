import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from 'src/api/api.service';
import { errorMessage } from 'src/errors/errors';
import { mockApiFunctions, MockApiService } from 'src/mock/mockFunctions';
import { mockError, mockNotFound } from 'src/mock/mockOutputs';
import { ShowsService } from './shows.service';

//  Mock IOs
const mockShowId = 0;
const mockQuery = 'testQuery';
const mockShow = {
  id: mockShowId,
  title: 'testShow',
};
const mockShows = [mockShow, mockShow];
const mockSeason = {
  id: 0,
  showId: mockShowId,
  seasonNumber: 1,
  episodes: 5,
  title: 'testSeason',
};
const mockEpisode = {
  id: 0,
  showId: mockShow,
  seasonNumber: mockSeason.seasonNumber,
  episodeNumber: 2,
  title: 'testEpisode',
};

// TEST
describe('Shows Service', () => {
  let service: ShowsService;
  let apiService: MockApiService;

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
    apiService = module.get(ApiService);
  });

  it('should be defined.', () => {
    expect(service).toBeDefined();
  });

  describe('topRated', () => {
    it('should get top rated shows.', async () => {
      apiService.shows.topRated.mockResolvedValue(mockShows);
      const result = await service.topRated();

      expect(apiService.shows.topRated).toHaveBeenCalled();
      expect(result).toEqual({ ok: true, shows: mockShows });
    });

    it('should fail on exception.', async () => {
      apiService.shows.topRated.mockRejectedValue(mockError);
      const result = await service.topRated();

      expect(apiService.shows.topRated).toHaveBeenCalled();
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });

  describe('popular', () => {
    it('should get popular shows.', async () => {
      apiService.shows.popular.mockResolvedValue(mockShows);
      const result = await service.popular();

      expect(apiService.shows.popular).toHaveBeenCalled();
      expect(result).toEqual({ ok: true, shows: mockShows });
    });

    it('should fail on exception.', async () => {
      apiService.shows.popular.mockRejectedValue(mockError);
      const result = await service.popular();

      expect(apiService.shows.popular).toHaveBeenCalled();
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });

  describe('airingToday', () => {
    it('should get shows airing today.', async () => {
      apiService.shows.airingToday.mockResolvedValue(mockShows);
      const result = await service.airingToday();

      expect(apiService.shows.airingToday).toHaveBeenCalled();
      expect(result).toEqual({ ok: true, shows: mockShows });
    });

    it('should fail on exception.', async () => {
      apiService.shows.airingToday.mockRejectedValue(mockError);
      const result = await service.airingToday();

      expect(apiService.shows.airingToday).toHaveBeenCalled();
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });

  describe('showDetail', () => {
    it('should get show detail.', async () => {
      apiService.shows.findById.mockResolvedValue(mockShow);
      const result = await service.showDetail(mockShowId);

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({ ok: true, show: mockShow });
    });

    it('should fail if show with id does not exists.', async () => {
      apiService.shows.findById.mockResolvedValue(mockNotFound);
      const result = await service.showDetail(mockShowId);

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({
        ok: false,
        error: errorMessage.showNotFound,
      });
    });

    it('should fail on exception.', async () => {
      apiService.shows.findById.mockRejectedValue(mockError);
      const result = await service.showDetail(mockShowId);

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({
        ok: false,
        error: mockError,
      });
    });
  });

  describe('searchShow', () => {
    it('should get searched shows.', async () => {
      apiService.search.show.mockResolvedValue(mockShows);
      const result = await service.searchShow(mockQuery);

      expect(apiService.search.show).toHaveBeenCalled();
      expect(apiService.search.show).toHaveBeenCalledWith(mockQuery);
      expect(result).toEqual({
        ok: true,
        shows: mockShows,
      });
    });

    it('should fail on exception.', async () => {
      apiService.search.show.mockRejectedValue(mockError);
      const result = await service.searchShow(mockQuery);

      expect(apiService.search.show).toHaveBeenCalled();
      expect(apiService.search.show).toHaveBeenCalledWith(mockQuery);
      expect(result).toEqual({
        ok: false,
        error: mockError,
      });
    });
  });

  describe('similarShows', () => {
    it('should get similar shows.', async () => {
      apiService.shows.findSimilarById.mockResolvedValue(mockShows);
      const result = await service.similarShows(mockShowId);

      expect(apiService.shows.findSimilarById).toHaveBeenCalled();
      expect(apiService.shows.findSimilarById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({
        ok: true,
        shows: mockShows,
      });
    });

    it('should fail if show with id does not exists.', async () => {
      apiService.shows.findSimilarById.mockResolvedValue(mockNotFound);
      const result = await service.similarShows(mockShowId);

      expect(apiService.shows.findSimilarById).toHaveBeenCalled();
      expect(apiService.shows.findSimilarById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({
        ok: false,
        error: errorMessage.showNotFound,
      });
    });

    it('should fail on exception.', async () => {
      apiService.shows.findSimilarById.mockRejectedValue(mockError);
      const result = await service.similarShows(mockShowId);

      expect(apiService.shows.findSimilarById).toHaveBeenCalled();
      expect(apiService.shows.findSimilarById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({
        ok: false,
        error: mockError,
      });
    });
  });

  describe('seasonDetail', () => {
    it('should get season detail.', async () => {
      apiService.shows.findById.mockResolvedValue(mockShow);
      apiService.shows.getSeasonDetail.mockResolvedValue(mockSeason);
      const result = await service.seasonDetail(
        mockShowId,
        mockSeason.seasonNumber,
      );

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalled();
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalledWith(
        mockShowId,
        mockSeason.seasonNumber,
      );
      expect(result).toEqual({
        ok: true,
        season: mockSeason,
      });
    });

    it('should fail if show with id does not exists.', async () => {
      apiService.shows.findById.mockResolvedValue(mockNotFound);
      const result = await service.seasonDetail(
        mockShowId,
        mockSeason.seasonNumber,
      );

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({
        ok: false,
        error: errorMessage.showNotFound,
      });
    });

    it('should fail if season number does not exists.', async () => {
      apiService.shows.findById.mockResolvedValue(mockShow);
      apiService.shows.getSeasonDetail.mockResolvedValue(mockNotFound);
      const result = await service.seasonDetail(
        mockShowId,
        mockSeason.seasonNumber,
      );

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalled();
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalledWith(
        mockShowId,
        mockSeason.seasonNumber,
      );
      expect(result).toEqual({
        ok: false,
        error: errorMessage.seasonNotFound,
      });
    });

    it('should fail on exception.', async () => {
      apiService.shows.findById.mockRejectedValue(mockError);
      const result = await service.seasonDetail(
        mockShowId,
        mockSeason.seasonNumber,
      );

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({
        ok: false,
        error: mockError,
      });
    });
  });

  describe('episodeDetail', () => {
    it('should get episode detail.', async () => {
      apiService.shows.findById.mockResolvedValue(mockShow);
      apiService.shows.getSeasonDetail.mockResolvedValue(mockSeason);
      apiService.shows.getEpisodeDetail.mockResolvedValue(mockEpisode);
      const result = await service.episodeDetail(
        mockShowId,
        mockSeason.seasonNumber,
        mockEpisode.episodeNumber,
      );

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalled();
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalledWith(
        mockShowId,
        mockSeason.seasonNumber,
      );
      expect(apiService.shows.getEpisodeDetail).toHaveBeenCalled();
      expect(apiService.shows.getEpisodeDetail).toHaveBeenCalledWith(
        mockShowId,
        mockSeason.seasonNumber,
        mockEpisode.episodeNumber,
      );
      expect(result).toEqual({ ok: true, episode: mockEpisode });
    });

    it('should fail if show with id does not exists.', async () => {
      apiService.shows.findById.mockResolvedValue(mockNotFound);
      const result = await service.episodeDetail(
        mockShowId,
        mockSeason.seasonNumber,
        mockEpisode.episodeNumber,
      );

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({ ok: false, error: errorMessage.showNotFound });
    });

    it('should fail if season number does not exists.', async () => {
      apiService.shows.findById.mockResolvedValue(mockShow);
      apiService.shows.getSeasonDetail.mockResolvedValue(mockNotFound);
      const result = await service.episodeDetail(
        mockShowId,
        mockSeason.seasonNumber,
        mockEpisode.episodeNumber,
      );

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalled();
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalledWith(
        mockShowId,
        mockSeason.seasonNumber,
      );
      expect(result).toEqual({ ok: false, error: errorMessage.seasonNotFound });
    });

    it('should fail if episode number does not exists.', async () => {
      apiService.shows.findById.mockResolvedValue(mockShow);
      apiService.shows.getSeasonDetail.mockResolvedValue(mockSeason);
      apiService.shows.getEpisodeDetail.mockResolvedValue(mockNotFound);
      const result = await service.episodeDetail(
        mockShowId,
        mockSeason.seasonNumber,
        mockEpisode.episodeNumber,
      );

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalled();
      expect(apiService.shows.getSeasonDetail).toHaveBeenCalledWith(
        mockShowId,
        mockSeason.seasonNumber,
      );
      expect(apiService.shows.getEpisodeDetail).toHaveBeenCalled();
      expect(apiService.shows.getEpisodeDetail).toHaveBeenCalledWith(
        mockShowId,
        mockSeason.seasonNumber,
        mockEpisode.episodeNumber,
      );
      expect(result).toEqual({
        ok: false,
        error: errorMessage.episodeNotFound,
      });
    });

    it('should fail on exception.', async () => {
      apiService.shows.findById.mockRejectedValue(mockError);
      const result = await service.episodeDetail(
        mockShowId,
        mockSeason.seasonNumber,
        mockEpisode.episodeNumber,
      );

      expect(apiService.shows.findById).toHaveBeenCalled();
      expect(apiService.shows.findById).toHaveBeenCalledWith(mockShowId);
      expect(result).toEqual({ ok: false, error: mockError });
    });
  });
});
