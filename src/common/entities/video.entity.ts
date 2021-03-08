import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from './core.entity';

type Size = 360 | 480 | 720 | 1080;
type Type =
  | 'Trailer'
  | 'Teaser'
  | 'Clip'
  | 'Featurette'
  | 'Behind the Scenes'
  | 'Bloopers';

@ObjectType()
export class Video extends CoreEntity {
  @Field((type) => String, { nullable: true })
  iso_639_1?: string;

  @Field((type) => String, { nullable: true })
  iso_3166_1?: string;

  @Field((type) => String, { nullable: true })
  key?: string;

  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  site?: string;

  @Field((type) => Int, { nullable: true })
  size?: Size;

  @Field((type) => String, { nullable: true })
  type?: Type;
}
