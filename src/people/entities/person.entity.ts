import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class Person extends CoreEntity {
  @Field((type) => String, { nullable: true })
  birthday?: string;

  @Field((type) => String, { nullable: true })
  known_for_department?: string;

  @Field((type) => String, { nullable: true })
  deathday?: string;

  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  also_knwon_as?: string;

  @Field((type) => Int, { nullable: true })
  gender?: number;

  @Field((type) => String, { nullable: true })
  biography?: string;

  @Field((type) => String, { nullable: true })
  place_of_birth?: string;

  @Field((type) => String, { nullable: true })
  profile_path?: string;

  @Field((type) => Boolean, { nullable: true })
  adult?: boolean;

  @Field((type) => String, { nullable: true })
  imdb_id?: string;

  @Field((type) => String, { nullable: true })
  homepage?: string;
}
