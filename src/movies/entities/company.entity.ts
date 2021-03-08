import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class Company extends CoreEntity {
  @Field((type) => String)
  name: string;

  @Field((type) => String, { nullable: true })
  logo_path?: string;

  @Field((type) => String, { nullable: true })
  origin_country?: string;
}
