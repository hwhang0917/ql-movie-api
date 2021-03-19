import { HttpModule, Module } from '@nestjs/common';
import { MoviesResolver } from './movies.resolver';
import { MoviesService } from './movies.service';

@Module({
  imports: [HttpModule],
  providers: [MoviesResolver, MoviesService],
})
export class MoviesModule {}
