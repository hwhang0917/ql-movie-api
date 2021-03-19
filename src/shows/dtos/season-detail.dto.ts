import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class SeasonDetailInput {
  @Field((type) => Int)
  showId: number;

  @Field((type) => Int)
  seasonNumber: number;
}
