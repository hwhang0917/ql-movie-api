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
import { ISO3166, ISO639 } from './utils/iso';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        TMDB_API: Joi.string().required(),
        TMDB_API_KEY: Joi.string().required(),
        LANGUAGE: Joi.string()
          .valid(...ISO639)
          .required(),
        REGION: Joi.string()
          .valid(...ISO3166)
          .required(),
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      introspection: true,
    }),
    ApiModule.forRoot({
      apiDomain: process.env.TMDB_API,
      apiKey: process.env.TMDB_API_KEY,
      language: process.env.LANGUAGE,
      region: process.env.REGION,
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
