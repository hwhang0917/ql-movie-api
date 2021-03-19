import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class Cast extends CoreEntity {
  @Field((type) => String, { nullable: true })
  character?: string;

  @Field((type) => String, { nullable: true })
  credit_id?: string;

  @Field((type) => String, { nullable: true })
  release_date?: string;

  @Field((type) => Int, { nullable: true })
  vote_count?: number;

  @Field((type) => Boolean, { nullable: true })
  video?: boolean;

  @Field((type) => Boolean, { nullable: true })
  adult?: boolean;

  @Field((type) => Int, { nullable: true })
  vote_average?: number;

  @Field((type) => String, { nullable: true })
  title?: string;

  @Field((type) => [Int])
  genre_ids?: number[];

  @Field((type) => String, { nullable: true })
  original_language?: string;

  @Field((type) => String, { nullable: true })
  original_title?: string;

  @Field((type) => Int, { nullable: true })
  popularity?: number;

  @Field((type) => String, { nullable: true })
  backdrop_path?: string;

  @Field((type) => String, { nullable: true })
  overview?: string;

  @Field((type) => String, { nullable: true })
  poster_path?: string;
}
