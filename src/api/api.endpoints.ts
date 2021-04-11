export const endPoints = {
  movies: {
    nowPlaying: 'movie/now_playing',
    upcoming: 'movie/upcoming',
    popular: 'movie/popular',
    findById: (id: number) => `movie/${id}`,
    findSimilarById: (id: number) => `movie/${id}/similar`,
  },
  shows: {
    topRated: 'tv/top_rated',
    popular: 'tv/popular',
    airingToday: 'tv/airing_today',
    findById: (id: number) => `tv/${id}`,
    findSimilarById: (id: number) => `tv/${id}`,
    getSeasonDetail: (id: number, seasonNumber: number) =>
      `tv/${id}/season/${seasonNumber}`,
    getEpisodeDetail: (
      id: number,
      seasonNumber: number,
      episodeNumber: number,
    ) => `tv/${id}/season/${seasonNumber}/episode/${episodeNumber}`,
  },
  people: {
    findById: (id: number) => `person/${id}`,
  },
  search: {
    movie: `search/movie`,
    show: `search/tv`,
    person: `search/person`,
  },
};
