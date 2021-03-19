import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Show } from '../entities/show.entity';

@ObjectType()
export class ShowsOutput extends CoreOutput {
  @Field((type) => [Show], { nullable: true })
  shows?: Show[];
}

@ObjectType()
export class ShowOutput extends CoreOutput {
  @Field((type) => Show, { nullable: true })
  show?: Show;
}
