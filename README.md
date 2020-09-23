# QL Movie Api

[![Author](https://img.shields.io/badge/author-hwhang0917-green?style=flat)](https://github.com/hwhang0917/ql-movie-api)
[![License](https://img.shields.io/github/license/hwhang0917/ql-movie-api)](https://github.com/hwhang0917/ql-movie-api/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/18cb7945-60ba-4f8f-ad86-8aca03ce88d8/deploy-status)](https://app.netlify.com/sites/movieql/deploys)

> [The Movie Database API](https://developers.themoviedb.org/) wrapped with GraphQL

### Getting Started: Development guide

1. Get [The Movie Database API Key](https://www.themoviedb.org/settings/api)
2. Create [.env](https://www.npmjs.com/package/dotenv) file in project root directory as following:
   ```
   API_KEY="Paste The Movie Database API Key here"
   ```
3. Install [yarn](https://yarnpkg.com/getting-started/install)
4. Install dependencies
   ```sh
   yarn
   ```
5. Run GraphQL development server
   ```sh
   yarn dev
   ```

### Production Guide

Production task flow uses `Gulp-cli`

1. Install [gulp-cli](https://www.npmjs.com/package/gulp-cli) for production
   ```sh
   yarn global add gulp-cli
   ```
2. Run build script

   ```sh
   yarn build
   ```

### Core dependencies for development

- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)
- [Gulp](https://gulpjs.com/)
