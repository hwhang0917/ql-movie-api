import axios from "axios";
require("dotenv").config();

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.API_KEY,
    language: "ko-KR",
    region: "KR",
  },
});

export const tmdbMoviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id: number) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos,credits",
      },
    }),
  search: (term: string) =>
    api.get("search/movie", {
      params: {
        // themoviedb API aitomatically URIencodes search term
        query: term,
      },
    }),
};

export const tmdbTVApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id: number) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos,credits",
      },
    }),
  seasonDeatil: (tvId: number, seasonNumber: number) =>
    api.get(`tv/${tvId}/season/${seasonNumber}`),
  episodeDetail: (tvId: number, seasonNumber: number, episodeNumber: number) =>
    api.get(`tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}`),
  search: (term: string) =>
    api.get("search/tv", {
      params: {
        // themoviedb API aitomatically URIencodes search term
        query: term,
      },
    }),
};

export const tmdbPeopleApi = {
  personDetail: (id: number) =>
    api.get(`person/${id}`, {
      params: {
        append_to_response: "movie_credits",
      },
    }),
  search: (term: string) =>
    api.get("search/person", {
      params: {
        // themoviedb API aitomatically URIencodes search term
        query: term,
      },
    }),
};
