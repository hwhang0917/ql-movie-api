import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Movie } from '../entities/movie.entity';

@ObjectType()
export class MoviesOutput extends CoreOutput {
  @Field((type) => [Movie], { nullable: true })
  movies?: Movie[];
}

@ObjectType()
export class MovieOutput extends CoreOutput {
  @Field((type) => Movie, { nullable: true })
  movie?: Movie;
}
