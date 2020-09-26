require("dotenv").config();

import axios from "axios";
import { isKorean } from "../utils";
import {
  Status,
  Movie,
  Show,
  Season,
  Episode,
  Person,
  MovieCredits,
  Configuration,
} from "../@types/datatypes";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.API_KEY,
    language: "ko-KR",
    region: "KR",
  },
});

// API Reqeust status
export const apiStatus: Status = {
  loading: false,
  error: null,
};

export const configuration = async () => {
  apiStatus.loading = true;
  let config: Configuration;
  try {
    ({ data: config } = await api.get("configuration"));
  } catch (error) {
    apiStatus.error = error;
  } finally {
    apiStatus.loading = false;
    return config;
  }
};

// Movie API
export const movie = {
  nowPlaying: async () => {
    // Get now playing movies
    apiStatus.loading = true;
    let results: [Movie];
    try {
      ({
        data: { results },
      } = await api.get("movie/now_playing"));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
  upcoming: async () => {
    // Get upcoming movies
    apiStatus.loading = true;
    let results: [Movie];
    try {
      ({
        data: { results },
      } = await api.get("movie/upcoming"));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
  popular: async () => {
    // Get popular movies
    apiStatus.loading = true;
    let results: [Movie];
    try {
      ({
        data: { results },
      } = await api.get("movie/popular"));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
  movieDetail: async (id: number) => {
    // Get detail information about given movie ID
    apiStatus.loading = true;
    let result: Movie;
    try {
      ({ data: result } = await api.get(`movie/${id}`, {
        params: {
          append_to_response: "videos,credits",
        },
      }));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return result;
    }
  },
  search: async (term: string) => {
    // Search movies from given term
    apiStatus.loading = true;
    let results: [Movie];
    try {
      ({
        data: { results },
      } = await api.get("search/movie", {
        params: {
          // themoviedb API aitomatically URIencodes search term
          query: term,
        },
      }));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
  similarMovies: async (id: number) => {
    // Get similar movies from given movie ID
    apiStatus.loading = true;
    let results: [Movie];
    try {
      ({ data: { results } } = await api.get(`movie/${id}/similar`));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
};

// TV Show API
export const show = {
  topRated: async () => {
    // Get top rated TV shows (평점이 높은 시리즈)
    apiStatus.loading = true;
    let results: [Show];
    try {
      ({
        data: { results },
      } = await api.get("tv/top_rated"));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
  popular: async () => {
    // Get currently popular TV shows (현재 인기 시리즈)
    apiStatus.loading = true;
    let results: [Show];
    try {
      ({
        data: { results },
      } = await api.get("tv/popular"));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
  airingToday: async () => {
    // Get TV shows airing today (오늘 상영하는 시리즈)
    apiStatus.loading = true;
    let results: [Show];
    try {
      ({
        data: { results },
      } = await api.get("tv/airing_today"));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
  showDetail: async (id: number) => {
    // Get show detail from given show ID
    apiStatus.loading = true;
    let result: Show;
    try {
      ({ data: result } = await api.get(`tv/${id}`, {
        params: {
          append_to_response: "videos,credits",
        },
      }));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return result;
    }
  },
  similarShows: async (id: number) => {
    // Get similar shows from given show ID
    apiStatus.loading = true;
    let results: [Show];
    try {
      ({ data: { results } } = await api.get(`tv/${id}/similar`));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
  seasonDeatil: async (showId: number, seasonNumber: number) => {
    // Get season detail of a given show ID and season number
    apiStatus.loading = true;
    let result: Season;
    try {
      ({ data: result } = await api.get(`tv/${showId}/season/${seasonNumber}`));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return result;
    }
  },
  episodeDetail: async (
    showId: number,
    seasonNumber: number,
    episodeNumber: number,
  ) => {
    // Get episode detail of a given show ID, season number, and episode number
    apiStatus.loading = true;
    let result: Episode;
    try {
      ({ data: result } = await api.get(
        `tv/${showId}/season/${seasonNumber}/episode/${episodeNumber}`,
      ));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return result;
    }
  },
  search: async (term: string) => {
    // Search TV show from given term
    apiStatus.loading = true;
    let results: [Show];
    try {
      ({
        data: { results },
      } = await api.get("search/tv", {
        params: {
          // themoviedb API aitomatically URIencodes search term
          query: term,
        },
      }));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
};

// People API
export const people = {
  personDetail: async (id: number) => {
    // Get detailed person information from gien person ID
    apiStatus.loading = true;
    let result: Person;
    let movieCredits: MovieCredits;
    try {
      ({ data: result } = await api.get(`person/${id}`, {
        params: {
          append_to_response: "movie_credits",
        },
      }));

      // Filter korean name from also_known_as
      const korKnownNames: Array<string> = result.also_known_as.filter(
        (name: string) => isKorean(name),
      );
      result.also_known_as = korKnownNames;

      // Destruct appended movie_credits into cast and crew objects
      movieCredits = result.movie_credits;
      delete result.movie_credits;
      result = { ...result, ...movieCredits };
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return result;
    }
  },
  search: async (term: string) => {
    // Search person information from given term
    apiStatus.loading = true;
    let results: [Person];
    try {
      ({
        data: { results },
      } = await api.get("search/person", {
        params: {
          // themoviedb API aitomatically URIencodes search term
          query: term,
        },
      }));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return results;
    }
  },
};
