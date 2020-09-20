export interface Movie {
  id: number;
  imdb_id: string | null;
  poster_path: string | null;
  backdrop_path: string | null;
  title: string;
  overview: string | null;
  relese_date: string;
  runtime: number | null;
  vote_average: number;
  production_companies: Array<Company> | null;
}

export interface Show {
  id: number;
  poster_path: string;
  backdrop_path: string | null;
  first_air_date: string;
  last_air_date: string;
  homepage: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  overview: string;
  seasons: Array<Season> | null;
  vote_average: number;
}

export interface Season {
  id: number;
  air_date: string;
  name: string;
  poster_path: string;
  overview: string | null;
  season_number: number | null;
  episodes: Array<Episode> | null;
}

export interface Episode {
  id: number;
  air_date: string;
  name: string;
  episode_number: number;
  season_number: number;
  vote_average: number;
}

export interface Company {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface Video {
  id: string;
  iso_639_1: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface Person {
  id: number;
  name: string;
  imdb_id: string | null;
  biography: string | null;
  profile_path: string | null;
  birthday: string | null;
  deathday: string | null;
}

export interface Cast extends Person {
  cast_id: number;
  character: string;
}

export interface Crew extends Person {
  credit_id: string;
  department: string;
  job: string;
}
