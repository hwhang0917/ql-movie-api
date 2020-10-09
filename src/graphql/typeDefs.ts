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
    release_date: String
    runtime: Int
    vote_average: Float!
    production_companies: [Company]
    videos: VideoResults
    genres: [Genres]
    credits: Credits
  }

  type Show {
    id: Int!
    poster_path: String
    backdrop_path: String
    first_air_date: String
    last_air_date: String
    homepage: String
    name: String!
    number_of_episodes: Int
    number_of_seasons: Int
    overview: String
    seasons: [Season]
    vote_average: Float!
    videos: VideoResults
    genres: [Genres]
    credits: Credits
  }

  type Credits {
    cast: [CreditCast]
    crew: [CreditCrew]
  }

  type CreditCast {
    id: Int!
    character: String
    name: String
    profile_path: String
  }

  type CreditCrew {
    id: Int!
    name: String
    profile_path: String
    department: String
  }

  type Genres {
    id: Int!
    name: String!
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
    overview: String
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
    movie_credits: PersonCredits
    tv_credits: PersonCredits
  }

  type PersonCredits {
    cast: [CastDetail]
    crew: [CrewDetail]
  }

  type CastDetail {
    id: Int!
    title: String
    name: String
    character: String
    poster_path: String
  }

  type CrewDetail {
    id: Int!
    original_title: String
    original_name: String
    department: String
    job: String
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
    similarMovies(id: Int!): [Movie]

    #   TV Show Queries
    topRatedShows: [Show]!
    popularShows: [Show]!
    airingTodayShows: [Show]!
    showDetail(id: Int!): Show
    similarShows(id: Int!): [Show]
    seasonDetail(showId: Int!, seasonNumber: Int!): Season
    episodeDetail(
      showId: Int!
      seasonNumber: Int!
      episodeNumber: Int!
    ): Episode
    searchShow(term: String!): [Show]

    #   Person Queries
    personDetail(id: Int!): Person
    searchPerson(term: String!): [Person]
  }
`;

export default typeDefs;
