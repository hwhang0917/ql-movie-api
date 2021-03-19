import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from './core.entity';

@ObjectType()
export class Genre extends CoreEntity {
  @Field((type) => String)
  name: string;
}

@ObjectType()
export class Country {
  @Field((type) => String)
  iso_3166_1: string;

  @Field((type) => String)
  name: string;
}

@ObjectType()
export class Language {
  @Field((type) => String)
  iso_639_1: string;

  @Field((type) => String)
  name: string;
}

@ObjectType()
export class Company extends CoreEntity {
  @Field((type) => String)
  name: string;

  @Field((type) => String, { nullable: true })
  logo_path?: string;

  @Field((type) => String, { nullable: true })
  origin_country?: string;
}
