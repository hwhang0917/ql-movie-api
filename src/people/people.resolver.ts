import { Args, Query, Resolver } from '@nestjs/graphql';
import { IdInput, SearchInput } from 'src/common/dtos/common.dto';
import { PeopleOutput, PersonOutput } from './dtos/people.dto';
import { Person } from './entities/person.entity';
import { PeopleService } from './people.service';

@Resolver((of) => Person)
export class PeopleResolver {
  constructor(private readonly peopleService: PeopleService) {}

  @Query((returns) => PersonOutput)
  personDetail(@Args() personDetailInput: IdInput): Promise<PersonOutput> {
    return this.peopleService.personDetail(personDetailInput.id);
  }

  @Query((returns) => PeopleOutput)
  searchPeople(@Args() searchPeopleInput: SearchInput): Promise<PeopleOutput> {
    return this.peopleService.searchPeople(searchPeopleInput.query);
  }
}
