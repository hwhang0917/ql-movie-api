import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class Test extends CoreEntity {
  @Field((type) => Int)
  userId: number;

  @Field((type) => String)
  title: string;

  @Field((type) => Boolean)
  completed: boolean;
}
