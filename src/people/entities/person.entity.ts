import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class Person extends CoreEntity {
  @Field((type) => String)
  birthday?: string;

  @Field((type) => String)
  known_for_department?: string;

  @Field((type) => String)
  deathday?: string;

  @Field((type) => String)
  name?: string;

  @Field((type) => String)
  also_knwon_as?: string;

  @Field((type) => Int)
  gender?: number;

  @Field((type) => String)
  biography?: string;

  @Field((type) => String)
  place_of_birth?: string;

  @Field((type) => String)
  profile_path?: string;

  @Field((type) => Boolean)
  adult?: boolean;

  @Field((type) => String)
  imdb_id?: string;

  @Field((type) => String)
  homepage?: string;
}
