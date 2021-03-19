import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Episode } from './episode.entity';

@ObjectType()
export class Season extends CoreEntity {
  @Field((type) => String, { nullable: true })
  air_date?: string;

  @Field((type) => [Episode])
  episodes?: Episode[];

  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  overview?: string;

  @Field((type) => String, { nullable: true })
  poster_path?: string;

  @Field((type) => Int, { nullable: true })
  season_number?: number;
}
