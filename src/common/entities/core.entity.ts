import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreEntity {
  @Field((type) => Int)
  id: number;
}
