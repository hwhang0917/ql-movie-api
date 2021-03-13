import { HttpService, Injectable } from '@nestjs/common';
import { Movie } from 'src/movies/entities/movie.entity';
import { Person } from 'src/people/entities/person.entity';
import { Episode } from 'src/shows/entities/episode.entity';
import { Season } from 'src/shows/entities/season.entity';
import { Show } from 'src/shows/entities/show.entity';
import { Parameters } from './api.interface';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  private async get<T>(url: string, params?: Parameters): Promise<T> {
    try {
      const { data } = await this.httpService.get(url, { params }).toPromise();
      if (data.results) {
        return data.results;
      } else {
        return data;
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  movies = {
    nowPlaying: (): Promise<Movie[]> => this.get<Movie[]>('movie/now_playing'),

    upcoming: async (): Promise<Movie[]> => this.get<Movie[]>('movie/upcoming'),

    popular: async (): Promise<Movie[]> =>
      await this.get<Movie[]>('movie/popular'),

    findById: async (id: number): Promise<Movie> =>
      await this.get<Movie>(`movie/${id}`, {
        append_to_response: 'videos,credits',
      }),

    findSimilarById: async (id: number): Promise<Movie[]> =>
      await this.get<Movie[]>(`movie/${id}/similar`),
  };

  shows = {
    topRated: async (): Promise<Show[]> => this.get<Show[]>('tv/top_rated'),

    popular: async (): Promise<Show[]> => this.get<Show[]>('tv/popular'),

    airingToday: async (): Promise<Show[]> =>
      this.get<Show[]>('tv/airing_today'),

    findById: async (id: number): Promise<Show> =>
      this.get<Show>(`tv/${id}`, {
        append_to_response: 'videos,credits',
      }),

    findSimilarById: async (id: number): Promise<Show[]> =>
      await this.get<Show[]>(`tv/${id}/similar`),

    getSeasonDetail: async (
      showId: number,
      seasonNumber: number,
    ): Promise<Season> =>
      await this.get<Season>(`tv/${showId}/season/${seasonNumber}`),

    getEpisodeDetail: async (
      showId: number,
      seasonNumber: number,
      episodeNumber: number,
    ): Promise<Episode> =>
      await this.get<Episode>(
        `tv/${showId}/season/${seasonNumber}/episode/${episodeNumber}`,
      ),
  };

  people = {
    findPersonById: async (id: number): Promise<Person> =>
      await this.get<Person>(`person/${id}`),
  };

  search = {
    movie: async (query: string): Promise<Movie[]> =>
      await this.get<Movie[]>('search/movie', { query }),

    show: async (query: string): Promise<Show[]> =>
      await this.get<Show[]>('search/tv', { query }),

    person: async (query: string): Promise<Person[]> =>
      await this.get<Person[]>('search/person', { query }),
  };
}
