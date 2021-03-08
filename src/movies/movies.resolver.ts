import { Query, Resolver } from '@nestjs/graphql';
import { Movie } from './entities/movie.entity';
import { Test } from './entities/test.entity';
import { MoviesService } from './movies.service';

@Resolver((of) => Movie)
export class MoviesResolver {
  constructor(private readonly movieService: MoviesService) {}

  @Query((returns) => Test)
  test() {
    return this.movieService.test();
  }
}
