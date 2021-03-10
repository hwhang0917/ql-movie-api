import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class IdInput {
  @Field((type) => Int)
  id: number;
}

@ArgsType()
export class SearchInput {
  @Field((type) => String)
  query: string;
}
