import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { ShowsModule } from './shows/shows.module';
import { PeopleModule } from './people/people.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [MoviesModule, ShowsModule, PeopleModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
