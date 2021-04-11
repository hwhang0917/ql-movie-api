import { HttpService } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { ApiService } from 'src/api/api.service';

export type MockApiService = {
  movies: MockApiMovies;
  shows: MockApiShows;
  people: MockApiPeople;
  search: MockApiSearch;
};
type MockApiMovies = Partial<Record<keyof ApiService['movies'], jest.Mock>>;
type MockApiShows = Partial<Record<keyof ApiService['shows'], jest.Mock>>;
type MockApiPeople = Partial<Record<keyof ApiService['people'], jest.Mock>>;
type MockApiSearch = Partial<Record<keyof ApiService['search'], jest.Mock>>;

export const mockApiFunctions: MockApiService = {
  movies: {
    nowPlaying: jest.fn(),
    upcoming: jest.fn(),
    popular: jest.fn(),
    findById: jest.fn(),
    findSimilarById: jest.fn(),
  },
  shows: {
    topRated: jest.fn(),
    popular: jest.fn(),
    airingToday: jest.fn(),
    findById: jest.fn(),
    findSimilarById: jest.fn(),
    getSeasonDetail: jest.fn(),
    getEpisodeDetail: jest.fn(),
  },
  people: {
    findById: jest.fn(),
  },
  search: {
    movie: jest.fn(),
    show: jest.fn(),
    person: jest.fn(),
  },
};

export type MockHttpService = Partial<Record<keyof HttpService, jest.Mock>>;

export const mockHttpServiceFunctions = {
  get: jest.fn(),
};
