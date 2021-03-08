import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(private readonly api: ApiService) {}

  async test() {
    console.log('requesting...');
    const result = await this.api.movies.findById(297761);
    console.log(result);
  }
}
