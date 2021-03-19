import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class Crew extends CoreEntity {
  @Field((type) => String, { nullable: true })
  department?: string;

  @Field((type) => String, { nullable: true })
  original_language?: string;

  @Field((type) => String, { nullable: true })
  original_title?: string;

  @Field((type) => String, { nullable: true })
  job?: string;

  @Field((type) => String, { nullable: true })
  overview?: string;

  @Field((type) => Int, { nullable: true })
  vote_count?: number;

  @Field((type) => Boolean, { nullable: true })
  video?: boolean;

  @Field((type) => String, { nullable: true })
  poster_path?: string;

  @Field((type) => String, { nullable: true })
  backdrop_path?: string;

  @Field((type) => String, { nullable: true })
  title?: string;

  @Field((type) => Int, { nullable: true })
  popularity?: number;

  @Field((type) => [Int])
  genre_ids?: number[];

  @Field((type) => Int, { nullable: true })
  vote_average?: number;

  @Field((type) => Boolean, { nullable: true })
  adult?: boolean;

  @Field((type) => String, { nullable: true })
  release_date?: string;

  @Field((type) => String, { nullable: true })
  credit_id?: string;
}
