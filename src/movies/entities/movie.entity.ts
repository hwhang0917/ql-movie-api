import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import {
  Company,
  Country,
  Genre,
  Language,
} from 'src/common/entities/common.entity';
import { VideoResults } from 'src/common/entities/video.entity';
import { Credits } from 'src/people/entities/credits.entity';

type Status =
  | 'Rumored'
  | 'Planned'
  | 'In Production'
  | 'Post Production'
  | 'Released'
  | 'Canceled';

@ObjectType()
export class Movie extends CoreEntity {
  @Field((type) => Boolean, { nullable: true })
  adult?: boolean;

  @Field((type) => String, { nullable: true })
  backdrop_path?: string;

  @Field((type) => Int, { nullable: true })
  budget?: number;

  @Field((type) => Credits)
  credits: Credits;

  @Field((type) => [Genre])
  genres: Genre[];

  @Field((type) => String, { nullable: true })
  homepage?: string;

  @Field((type) => String, { nullable: true })
  imdb_id?: string;

  @Field((type) => String, { nullable: true })
  original_language?: string;

  @Field((type) => String, { nullable: true })
  original_title?: string;

  @Field((type) => String, { nullable: true })
  overview?: string;

  @Field((type) => Int, { nullable: true })
  popularity?: number;

  @Field((type) => String, { nullable: true })
  poster_path: string;

  @Field((type) => [Company])
  production_companies: Company[];

  @Field((type) => [Country])
  production_countries: Country[];

  @Field((type) => String, { nullable: true })
  release_date?: string;

  @Field((type) => Int, { nullable: true })
  revenue?: number;

  @Field((type) => Int, { nullable: true })
  runtime?: number;

  @Field((type) => [Language])
  spoken_languages: Language[];

  @Field((type) => String, { nullable: true })
  status?: Status;

  @Field((type) => String, { nullable: true })
  tagline?: string;

  @Field((type) => VideoResults)
  videos: VideoResults;

  @Field((type) => Float, { nullable: true })
  vote_average?: number;

  @Field((type) => Int, { nullable: true })
  vote_count?: number;
}
