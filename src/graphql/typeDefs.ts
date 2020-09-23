import { gql } from "apollo-server-lambda";

const typeDefs = gql`
type Configurations {
  images: ImageConfigurations
  change_keys: [String]
}

type ImageConfigurations {
  base_url: String!
  secure_base_url: String!
  backdrop_sizes: [String]
  logo_sizes: [String]
  poster_sizes: [String]
  profile_sizes: [String]
  still_sizes: [String]
}

type Movie {
  id: Int!
  imdb_id: String
  poster_path: String
  backdrop_path: String
  title: String!
  overview: String
  release_date: String!
  runtime: Int
  vote_average: Float!
  production_companies: [Company]
  videos: VideoResults
}

type Show {
  id: Int!
  poster_path: String
  backdrop_path: String
  first_air_date: String!
  last_air_date: String
  homepage: String
  name: String!
  number_of_episodes: Int
  number_of_seasons: Int
  overview: String
  seasons: [Season]
  vote_average: Float!
  videos: VideoResults
}

type Season {
  id: Int!
  air_date: String
  name: String!
  poster_path: String
  overview: String
  season_number: Int
  episodes: [Episode]
}

type Episode {
  id: Int!
  show_id: Int!
  air_date: String
  name: String!
  episode_number: Int
  season_number: Int
  vote_average: Float!
}

type Person {
  id: Int!
  name: String!
  imdb_id: String
  also_known_as: [String]
  biography: String
  profile_path: String
  birthday: String
  deathday: String
  cast: [Cast]
  crew: [Crew]
}

type Cast {
  cast_id: Int!
  character: String!
  title: String!
  poster_path: String
}

type Crew {
  credit_id: Int!
  department: String!
  job: String!
  poster_path: String
}

type Company {
  id: Int!
  name: String!
  logo_path: String
  origin_country: String
}

type VideoResults {
  results: [Video]
}

type Video {
  id: String!
  iso: String!
  key: String!
  name: String!
  site: String!
  type: String!
}

type Query {
  # Config queries
  configurations: Configurations

  # Movie Queries
  nowPlayingMovies: [Movie]!
  upcomingMovies: [Movie]!
  popularMovies: [Movie]!
  movieDetail(id: Int!): Movie
  searchMovie(term: String!): [Movie]

  #   TV Show Queries
  topRatedShows: [Show]!
  popularShows: [Show]!
  airingTodayShows: [Show]!
  showDetail(id: Int!): Show
  seasonDetail(showId: Int!, seasonNumber: Int!): Season
  episodeDetail(
    showId: Int!
    seasonNumber: Int!
    episodeNumber: Int!
  ): [Episode]
  searchShow(term: String!): [Show]

  #   Person Queries
  personDetail(id: Int!): Person
  searchPerson(term: String!): [Person]
}
`;

export default typeDefs;