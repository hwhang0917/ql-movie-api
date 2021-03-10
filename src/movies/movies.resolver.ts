import { Args, Query, Resolver } from '@nestjs/graphql';
import { IdInput, SearchInput } from 'src/common/dtos/common.dto';
import { MovieOutput, MoviesOutput } from './dtos/movies.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Resolver((of) => Movie)
export class MoviesResolver {
  constructor(private readonly movieService: MoviesService) {}

  @Query((returns) => MoviesOutput)
  nowPlaying(): Promise<MoviesOutput> {
    return this.movieService.nowPlaying();
  }

  @Query((returns) => MoviesOutput)
  upcoming(): Promise<MoviesOutput> {
    return this.movieService.upcoming();
  }

  @Query((returns) => MoviesOutput)
  popular(): Promise<MoviesOutput> {
    return this.movieService.popular();
  }

  @Query((returns) => MovieOutput)
  movieDetail(@Args() movieDetailInput: IdInput): Promise<MovieOutput> {
    return this.movieService.movieDetail(movieDetailInput.id);
  }

  @Query((returns) => MoviesOutput)
  searchMovie(@Args() searchMovieInput: SearchInput): Promise<MoviesOutput> {
    return this.movieService.searchMovie(searchMovieInput.query);
  }

  @Query((returns) => MoviesOutput)
  similarMovies(@Args() similarMovieInput: IdInput): Promise<MoviesOutput> {
    return this.movieService.similarMovies(similarMovieInput.id);
  }
}
