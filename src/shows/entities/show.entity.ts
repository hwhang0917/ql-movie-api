import { Field, Int, ObjectType, PickType } from '@nestjs/graphql';
import {
  Company,
  Country,
  Genre,
  Language,
} from 'src/common/entities/common.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Person } from 'src/people/entities/person.entity';
import { Episode } from './episode.entity';
import { Network } from './network.entity';
import { Season } from './season.entity';

@ObjectType()
class Creator extends PickType(Person, [
  'id',
  'name',
  'gender',
  'profile_path',
]) {
  @Field((type) => String, { nullable: true })
  credir_id?: string;
}

@ObjectType()
class LastEpisode extends PickType(Episode, [
  'air_date',
  'episode_number',
  'id',
  'name',
  'overview',
  'production_code',
  'season_number',
  'still_path',
  'vote_average',
  'vote_count',
]) {}

@ObjectType()
export class Show extends CoreEntity {
  @Field((type) => String, { nullable: true })
  backdrop_path?: string;

  @Field((type) => [Creator])
  created_by: Creator[];

  @Field((type) => [Int])
  episode_run_time: number[];

  @Field((type) => String, { nullable: true })
  first_air_date?: string;

  @Field((type) => [Genre])
  genres: Genre[];

  @Field((type) => String, { nullable: true })
  homepage?: string;

  @Field((type) => Boolean, { nullable: true })
  in_production?: boolean;

  @Field((type) => [Language])
  languages: Language[];

  @Field((type) => String, { nullable: true })
  last_air_date?: string;

  @Field((type) => LastEpisode, { nullable: true })
  last_episode_to_air?: LastEpisode;

  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => [Network])
  networks: Network[];

  @Field((type) => Int, { nullable: true })
  number_of_episodes?: number;

  @Field((type) => Int, { nullable: true })
  number_of_seasons?: number;

  @Field((type) => [String])
  origin_country: string[];

  @Field((type) => String, { nullable: true })
  original_language?: string;

  @Field((type) => String, { nullable: true })
  original_name?: string;

  @Field((type) => String, { nullable: true })
  overview?: string;

  @Field((type) => Int, { nullable: true })
  popularity?: number;

  @Field((type) => String, { nullable: true })
  poster_path?: string;

  @Field((type) => [Company])
  production_companies: Company[];

  @Field((type) => [Country])
  production_countries: Country[];

  @Field((type) => [Season])
  seasons: Season[];

  @Field((type) => [Language])
  spoken_languages: Language[];

  @Field((type) => String, { nullable: true })
  status?: string;

  @Field((type) => String, { nullable: true })
  tagline?: string;

  @Field((type) => String, { nullable: true })
  type?: string;

  @Field((type) => Int, { nullable: true })
  vote_average?: number;

  @Field((type) => Int, { nullable: true })
  vote_count?: number;
}
