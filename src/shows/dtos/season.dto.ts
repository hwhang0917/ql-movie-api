import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Season } from '../entities/season.entity';

@ObjectType()
export class SeasonOutput extends CoreOutput {
  @Field((type) => Season, { nullable: true })
  season?: Season;
}
