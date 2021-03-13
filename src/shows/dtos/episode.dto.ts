import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Episode } from '../entities/episode.entity';

@ObjectType()
export class EpisodeOutput extends CoreOutput {
  @Field((type) => Episode, { nullable: true })
  episode?: Episode;
}
