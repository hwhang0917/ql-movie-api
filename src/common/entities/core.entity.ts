import { Field, Int } from '@nestjs/graphql';

export class CoreEntity {
  @Field((type) => Int)
  id: number;
}
