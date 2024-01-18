<p align="center">
    <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057793/noticon/e4eukig4eptfib2pwhvo.svg" width="100"/>
</p>

# QL Movie Api

> [The Movie Database API](https://www.themoviedb.org/documentation/api) wrapped with GraphQL

[![Author](https://img.shields.io/badge/author-hwhang0917-green?style=flat)](https://github.com/hwhang0917/ql-movie-api)
[![License](https://img.shields.io/github/license/hwhang0917/ql-movie-api)](https://github.com/hwhang0917/ql-movie-api/blob/master/LICENSE)
![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/hwhang0917/16feb82d8fbd22f7ada29e97942b3f1e/raw/ql-movie-api.json)

## Requirements

* Node.js (v20.11.0)
* The Movie Database API Key

## Quick start guide

1. Get the Movie Database API Key from [here](https://www.themoviedb.org/settings/api).

2. Clone this project to your local directory.

3. Install dependencies using [Yarn](http://yarnpkg.com/).

4. Copy `.env.sample` file as `.env` in the root of this project.

5. Set `.env` as following:

   ```.env
   TMDB_API_KEY=<YOUR TMDB API KEY>
   LANGUAGE=<ISO-639 language :: default en>
   REGION=<ISO-3166 region :: default US>
   ```

6. Run server

   ```sh
   # Run as development mode
   yarn start:dev
   # Build server and run production
   yarn build && yarn start:prod
   ```

7. Check if the server is running properly on port `3000`.

## Docker

1. Build docker image.

   ```sh
   docker built -t <image-name> .
   ```

2. Run docker container with `.env` file.

   ```sh
   docker run -d --env-file .env <image-name>
   ```

3. Check if the server is running properly on port `3000`.

## Reference

* [How to get TMDB API Key](https://www.themoviedb.org/documentation/api)
* [ISO-639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
* [ISO-3166](https://en.wikipedia.org/wiki/ISO_3166-1)
