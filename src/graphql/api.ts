require("dotenv").config();

import axios from "axios";
import {
  Status,
  Movie,
  Show,
  Season,
  Episode,
  Person,
  MovieCredits,
} from "./datatypes";

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
};

// TV Show API
export const show = {
  topRated: async () => {
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
  seasonDeatil: async (showId: number, seasonNumber: number) => {
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
    episodeNumber: number
  ) => {
    apiStatus.loading = true;
    let result: Episode;
    try {
      ({ data: result } = await api.get(
        `tv/${showId}/season/${seasonNumber}/episode/${episodeNumber}`
      ));
    } catch (error) {
      apiStatus.error = error;
    } finally {
      apiStatus.loading = false;
      return result;
    }
  },
  search: async (term: string) => {
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
    apiStatus.loading = true;
    let result: Person;
    let movieCredits: MovieCredits;
    try {
      ({ data: result } = await api.get(`person/${id}`, {
        params: {
          append_to_response: "movie_credits",
        },
      }));

      // Destruct appended movie_credits into cast and crew array
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
