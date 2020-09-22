import { movie, show, people } from "./api";

const resolvers = {
  Query: {
    //   Movie Resolvers
    nowPlayingMovies: () => movie.nowPlaying(),
    upcomingMovies: () => movie.upcoming(),
    popularMovies: () => movie.popular(),
    movieDetail: (_: null, { id }: { id: number }) => movie.movieDetail(id),
    searchMovie: (_: null, { term }: { term: string }) => movie.search(term),

    //   Show Resolvers
    topRatedShows: () => show.topRated(),
    popularShows: () => show.popular(),
    airingTodayShows: () => show.airingToday(),
    showDetail: (_: null, { id }: { id: number }) => show.showDetail(id),
    seasonDetail: (
      _: null,
      { showId, seasonNumber }: { showId: number; seasonNumber: number }
    ) => show.seasonDeatil(showId, seasonNumber),
    episodeDetail: (
      _: null,
      {
        showId,
        seasonNumber,
        episodeNumber,
      }: { showId: number; seasonNumber: number; episodeNumber: number }
    ) => show.episodeDetail(showId, seasonNumber, episodeNumber),
    searchShow: (_: null, { term }: { term: string }) => show.search(term),

    //   Person Resolvers
    personDetail: (_: null, { id }: { id: number }) => people.personDetail(id),
    searchPerson: (_: null, { term }: { term: string }) => people.search(term),
  },
};

export default resolvers;
