import { movie, show, people, configuration } from "./api";

const resolvers = {
  Query: {
    //   Configurations
    configurations: () => configuration(),

    //   Movie Resolvers
    nowPlayingMovies: () => movie.nowPlaying(),
    upcomingMovies: () => movie.upcoming(),
    popularMovies: () => movie.popular(),
    movieDetail: (_: null, { id }: { id: number }) => movie.movieDetail(id),
    searchMovie: (_: null, { term }: { term: string }) => movie.search(term),
    similarMovies: (_: null, { id }: { id: number }) => movie.similarMovies(id),

    //   Show Resolvers
    topRatedShows: () => show.topRated(),
    popularShows: () => show.popular(),
    airingTodayShows: () => show.airingToday(),
    showDetail: (_: null, { id }: { id: number }) => show.showDetail(id),
    similarShows: (_: null, { id }: { id: number }) => show.similarShows(id),
    seasonDetail: (
      _: null,
      { showId, seasonNumber }: { showId: number; seasonNumber: number },
    ) => show.seasonDeatil(showId, seasonNumber),
    episodeDetail: (
      _: null,
      {
        showId,
        seasonNumber,
        episodeNumber,
      }: { showId: number; seasonNumber: number; episodeNumber: number },
    ) => show.episodeDetail(showId, seasonNumber, episodeNumber),
    searchShow: (_: null, { term }: { term: string }) => show.search(term),

    //   Person Resolvers
    personDetail: (_: null, { id }: { id: number }) => people.personDetail(id),
    searchPerson: (_: null, { term }: { term: string }) => people.search(term),
  },
};

export default resolvers;
