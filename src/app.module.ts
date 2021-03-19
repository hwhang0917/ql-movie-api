import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { ShowsModule } from './shows/shows.module';
import { PeopleModule } from './people/people.module';
import { CommonModule } from './common/common.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        TMDB_API: Joi.string().required(),
        TMDB_API_KEY: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true, playground: true }),
    ApiModule.forRoot({
      apiDomain: process.env.TMDB_API,
      apiKey: process.env.TMDB_API_KEY,
      language: 'ko-KR',
      region: 'KR',
    }),
    MoviesModule,
    ShowsModule,
    PeopleModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
