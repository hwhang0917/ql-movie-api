import { Field, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Crew } from 'src/people/entities/crew.entity';
import { Person } from 'src/people/entities/person.entity';

@ObjectType()
class GuestStar extends PickType(Person, ['id', 'name', 'profile_path']) {
  @Field((type) => String, { nullable: true })
  credit_id?: string;

  @Field((type) => String, { nullable: true })
  character?: string;

  @Field((type) => Int, { nullable: true })
  order?: number;
}

@ObjectType()
export class Episode extends CoreEntity {
  @Field((type) => String, { nullable: true })
  air_date?: string;

  @Field((type) => [Crew])
  crew: Crew[];

  @Field((type) => Int, { nullable: true })
  episode_number?: number;

  @Field((type) => [GuestStar])
  guest_stars: GuestStar[];

  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  overview?: string;

  @Field((type) => String, { nullable: true })
  production_code?: string;

  @Field((type) => Int, { nullable: true })
  season_number?: number;

  @Field((type) => String, { nullable: true })
  still_path?: string;

  @Field((type) => Int, { nullable: true })
  vote_average?: number;

  @Field((type) => Int, { nullable: true })
  vote_count?: number;
}
