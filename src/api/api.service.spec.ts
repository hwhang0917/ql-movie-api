import { HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  MockHttpService,
  mockHttpServiceFunctions,
} from 'src/mock/mockFunctions';
import { mockError } from 'src/mock/mockOutputs';
import { endPoints } from './api.endpoints';
import { ApiService } from './api.service';

// Mock I/Os
type MockAxiosResponse = {
  data: { results?: { id: number }[] } | { id: number };
};
const mockQuery = 'TEST';
const mockItem = { id: 0, seasonNumber: 0, episodeNumber: 0 };
const mockItems = [mockItem];
const mockGetToPromise = {
  toPromise: jest.fn(),
};
const mockNoParam = { params: undefined };
const mockItemsResponse: MockAxiosResponse = {
  data: { results: mockItems },
};
const mockItemResponse: MockAxiosResponse = {
  data: mockItem,
};

// TEST
describe('Api Service', () => {
  let service: ApiService;
  let httpService: MockHttpService;
  let getSpyFunction: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiService,
        {
          provide: HttpService,
          useValue: mockHttpServiceFunctions,
        },
      ],
    }).compile();
    service = module.get<ApiService>(ApiService);
    httpService = module.get(HttpService);
    httpService.get.mockReturnValue(mockGetToPromise);
    getSpyFunction = jest.spyOn(ApiService.prototype as any, 'get');
  });

  it('should be defined.', () => {
    expect(service).toBeDefined();
  });

  describe('Movies', () => {
    describe('nowPlaying', () => {
      it('should get now playing movies.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.movies.nowPlaying();

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(getSpyFunction).toHaveBeenCalledWith(
          endPoints.movies.nowPlaying,
        );
        expect(httpService.get).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalledWith(
          endPoints.movies.nowPlaying,
          mockNoParam,
        );
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('upcoming', () => {
      it('should get upcoming movies.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.movies.upcoming();

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(getSpyFunction).toHaveBeenCalledWith(endPoints.movies.upcoming);
        expect(httpService.get).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalledWith(
          endPoints.movies.upcoming,
          mockNoParam,
        );
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('popular', () => {
      it('should get popular movies.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.movies.popular();

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(getSpyFunction).toHaveBeenCalledWith(endPoints.movies.popular);
        expect(httpService.get).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalledWith(
          endPoints.movies.popular,
          mockNoParam,
        );
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('findById', () => {
      it('should find movie by id.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemResponse);
        const result = await service.movies.findById(mockItem.id);

        expect(result).toEqual(mockItem);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('findSimilarById', () => {
      it('should find similar movies by id.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.movies.findSimilarById(mockItem.id);

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });
  });

  describe('Shows', () => {
    describe('topRated', () => {
      it('should get top rated shows.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.shows.topRated();

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(getSpyFunction).toHaveBeenCalledWith(endPoints.shows.topRated);
        expect(httpService.get).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalledWith(
          endPoints.shows.topRated,
          mockNoParam,
        );
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('popular', () => {
      it('should get popular shows.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.shows.popular();

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(getSpyFunction).toHaveBeenCalledWith(endPoints.shows.popular);
        expect(httpService.get).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalledWith(
          endPoints.shows.popular,
          mockNoParam,
        );
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('airingToday', () => {
      it('should get shows airing today.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.shows.airingToday();

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(getSpyFunction).toHaveBeenCalledWith(
          endPoints.shows.airingToday,
        );
        expect(httpService.get).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalledWith(
          endPoints.shows.airingToday,
          mockNoParam,
        );
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('findById', () => {
      it('should find show by id.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemResponse);
        const result = await service.shows.findById(mockItem.id);

        expect(result).toEqual(mockItem);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('findSimilarById', () => {
      it('should find similar shows by id.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.shows.findSimilarById(mockItem.id);

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('getSeasonDetail', () => {
      it('should get season detail.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemResponse);
        const result = await service.shows.getSeasonDetail(
          mockItem.id,
          mockItem.seasonNumber,
        );

        expect(result).toEqual(mockItem);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('getEpisodeDetail', () => {
      it('should get episode detail.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemResponse);
        const result = await service.shows.getEpisodeDetail(
          mockItem.id,
          mockItem.seasonNumber,
          mockItem.episodeNumber,
        );

        expect(result).toEqual(mockItem);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });
  });

  describe('People', () => {
    describe('findPersonById', () => {
      it('should find person by id.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.people.findById(mockItem.id);

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });
  });

  describe('Search', () => {
    describe('movie', () => {
      it('should search movies with query.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.search.movie(mockQuery);

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('show', () => {
      it('should search shows with query.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.search.show(mockQuery);

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });

    describe('person', () => {
      it('should search people with query.', async () => {
        mockGetToPromise.toPromise.mockResolvedValue(mockItemsResponse);
        const result = await service.search.person(mockQuery);

        expect(result).toEqual(mockItems);
        expect(getSpyFunction).toHaveBeenCalled();
        expect(httpService.get).toHaveBeenCalled();
        expect(mockGetToPromise.toPromise).toHaveBeenCalled();
      });
    });
  });
});
