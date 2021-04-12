import { HttpService, Injectable, UnauthorizedException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { START_TIME_CONFIG } from 'src/common/common.constants';
import { errorMessage } from 'src/errors/errors';
import { Movie } from 'src/movies/entities/movie.entity';
import { Person } from 'src/people/entities/person.entity';
import { Episode } from 'src/shows/entities/episode.entity';
import { Season } from 'src/shows/entities/season.entity';
import { Show } from 'src/shows/entities/show.entity';
import { endPoints } from './api.endpoints';
import { Parameters } from './api.interface';
import { httpLog } from './api.logger';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  private async get<Element>(
    url: string,
    params?: Parameters,
  ): Promise<Element> {
    try {
      const { data } = await this.httpService.get(url, { params }).toPromise();
      if (data.results) {
        return data.results;
      } else {
        return data;
      }
    } catch (e) {
      if (!e.response) {
        // Request was made but there was no response
        throw new Error(errorMessage.noConnection);
      }

      // Failed responses
      const { config, status, statusText } = (e as AxiosError).response;
      if (config) {
        const { method, url, headers } = config;
        const startTime = headers[START_TIME_CONFIG];
        httpLog({
          service: 'HTTP Service',
          method,
          url,
          startTime,
          status,
          statusText,
        });
      }

      if (status === 401) {
        // Invalid API Key Error
        throw new Error(errorMessage.invalidApiKey);
      }
      if (status === 404) {
        // Resource not found error
        return undefined;
      }
      if (500 <= status) {
        // TMDB Server Error
        throw new Error(errorMessage.serverError(statusText));
      }
    }
  }

  movies = {
    nowPlaying: (): Promise<Movie[]> =>
      this.get<Movie[]>(endPoints.movies.nowPlaying),

    upcoming: (): Promise<Movie[]> =>
      this.get<Movie[]>(endPoints.movies.upcoming),

    popular: (): Promise<Movie[]> =>
      this.get<Movie[]>(endPoints.movies.popular),

    findById: (id: number): Promise<Movie> =>
      this.get<Movie>(endPoints.movies.findById(id), {
        append_to_response: 'videos,credits',
      }),

    findSimilarById: (id: number): Promise<Movie[]> =>
      this.get<Movie[]>(endPoints.movies.findSimilarById(id)),
  };

  shows = {
    topRated: (): Promise<Show[]> => this.get<Show[]>(endPoints.shows.topRated),

    popular: (): Promise<Show[]> => this.get<Show[]>(endPoints.shows.popular),

    airingToday: (): Promise<Show[]> =>
      this.get<Show[]>(endPoints.shows.airingToday),

    findById: (id: number): Promise<Show> =>
      this.get<Show>(endPoints.shows.findById(id), {
        append_to_response: 'videos,credits',
      }),

    findSimilarById: (id: number): Promise<Show[]> =>
      this.get<Show[]>(endPoints.shows.findSimilarById(id)),

    getSeasonDetail: (showId: number, seasonNumber: number): Promise<Season> =>
      this.get<Season>(endPoints.shows.getSeasonDetail(showId, seasonNumber)),

    getEpisodeDetail: (
      showId: number,
      seasonNumber: number,
      episodeNumber: number,
    ): Promise<Episode> =>
      this.get<Episode>(
        endPoints.shows.getEpisodeDetail(showId, seasonNumber, episodeNumber),
      ),
  };

  people = {
    findById: (id: number): Promise<Person> =>
      this.get<Person>(endPoints.people.findById(id)),
  };

  search = {
    movie: (query: string): Promise<Movie[]> =>
      this.get<Movie[]>(endPoints.search.movie, { query }),

    show: (query: string): Promise<Show[]> =>
      this.get<Show[]>(endPoints.search.show, { query }),

    person: (query: string): Promise<Person[]> =>
      this.get<Person[]>(endPoints.search.person, { query }),
  };
}
