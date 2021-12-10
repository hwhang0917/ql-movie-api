<p align="center">
    <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057793/noticon/e4eukig4eptfib2pwhvo.svg" width="100"/>
</p>

# QL Movie Api

> [The Movie Database API](https://www.themoviedb.org/documentation/api) wrapped with GraphQL

[![Author](https://img.shields.io/badge/author-hwhang0917-green?style=flat)](https://github.com/hwhang0917/ql-movie-api)
[![License](https://img.shields.io/github/license/hwhang0917/ql-movie-api)](https://github.com/hwhang0917/ql-movie-api/blob/master/LICENSE)
![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/hwhang0917/16feb82d8fbd22f7ada29e97942b3f1e/raw/ql-movie-api.json)
[![Deployment](https://heroku-badge.herokuapp.com/?app=ql-movie-api)](https://ql-movie-api.herokuapp.com/)

## Nest Migration and Deployment

Newer versioin migrated to [NestJS](https://nestjs.com/) and [Heroku](https://www.heroku.com/) for deployment. Here's a functioning **[link](https://ql-movie-api.herokuapp.com/graphql)**

## Quick start guide

1. Clone this project to your local directory.

2. Install dependencies using Yarn.

3. Create a `.env` file in the root directory of this project as following:

   - Getting the Movie Database API Key => [HERE](https://www.themoviedb.org/documentation/api)
   - Language and Region should be set as [ISO-639 (Language)](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and [ISO-3166 (Region)](https://en.wikipedia.org/wiki/ISO_3166-2) respectively

   ```.env
   TMDB_API_KEY=YOUR TMDB API KEY
   LANGUAGE=ISO-639
   REGION=ISO-3166
   ```

4. Run `yarn start`

## Jenkins

> CI / CD Practice
