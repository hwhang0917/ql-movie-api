import { ArgsType, Field, Int } from '@nestjs/graphql';
import { SeasonDetailInput } from './season-detail.dto';

@ArgsType()
export class EpisodeDetailInput extends SeasonDetailInput {
  @Field((type) => Int)
  episodeNumber: number;
}
