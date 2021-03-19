import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Cast } from './cast.entity';
import { Crew } from './crew.entity';

@ObjectType()
export class Credits extends CoreEntity {
  @Field((type) => [Cast])
  cast: Cast[];

  @Field((type) => [Crew])
  crew: Crew[];
}
