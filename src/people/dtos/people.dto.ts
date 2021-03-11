import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Person } from '../entities/person.entity';

@ObjectType()
export class PeopleOutput extends CoreOutput {
  @Field((type) => [Person], { nullable: true })
  people?: Person[];
}

@ObjectType()
export class PersonOutput extends CoreOutput {
  @Field((type) => Person, { nullable: true })
  person?: Person;
}
