import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { PeopleOutput, PersonOutput } from './dtos/people.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly api: ApiService) {}

  async personDetail(id: number): Promise<PersonOutput> {
    try {
      const person = await this.api.people.findPersonById(id);
      if (!person) {
        return { ok: false, error: 'Person with that id does not exists.' };
      }
      return { ok: true, person };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async searchPeople(query: string): Promise<PeopleOutput> {
    try {
      const people = await this.api.search.person(query);
      return { ok: true, people };
    } catch (error) {
      return { ok: false, error };
    }
  }
}
