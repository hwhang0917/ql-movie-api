import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Movie } from 'src/movies/entities/movie.entity';
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

  search = {
    movie: async (query: string): Promise<Movie[]> =>
      await this.get<Movie[]>('search/movie', { query }),

    // show: async (query: string): Promise<> =>
    //   await this.get('search/tv', { query }),

    // person: async (query: string): Promise<> =>
    //   await this.get('search/person', { query }),
  };
}
