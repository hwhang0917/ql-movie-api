import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class Network extends CoreEntity {
  @Field((type) => String, { nullable: true })
  headquarters?: string;

  @Field((type) => String, { nullable: true })
  homepage?: string;

  @Field((type) => String, { nullable: true })
  logo_path?: string;

  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  origin_country?: string;
}
