import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { MovieOutput, MoviesOutput } from './dtos/movies.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly api: ApiService) {}

  async nowPlaying(): Promise<MoviesOutput> {
    try {
      const movies = await this.api.movies.nowPlaying();
      return { ok: true, movies };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async upcoming(): Promise<MoviesOutput> {
    try {
      const movies = await this.api.movies.upcoming();
      return { ok: true, movies };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async popular(): Promise<MoviesOutput> {
    try {
      const movies = await this.api.movies.popular();
      return { ok: true, movies };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async movieDetail(id: number): Promise<MovieOutput> {
    try {
      const movie = await this.api.movies.findById(id);
      if (!movie) {
        return { ok: false, error: 'Movie with that id does not exits.' };
      }
      return { ok: true, movie };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async searchMovie(query: string): Promise<MoviesOutput> {
    try {
      const movies = await this.api.search.movie(query);
      return { ok: true, movies };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async similarMovies(id: number): Promise<MoviesOutput> {
    try {
      const movies = await this.api.movies.findSimilarById(id);
      return { ok: true, movies };
    } catch (error) {
      return { ok: false, error };
    }
  }
}
