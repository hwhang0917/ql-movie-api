export const mockApiFunctions = {
  movies: {
    nowPlaying: jest.fn(),
    upcoming: jest.fn(),
    popular: jest.fn(),
    findById: jest.fn(),
    findSimilarById: jest.fn(),
  },
  shows: {
    topRated: jest.fn(),
    popular: jest.fn(),
    airingToday: jest.fn(),
    findById: jest.fn(),
    findSimilarById: jest.fn(),
    getSeasonDetail: jest.fn(),
    getEpisodeDetail: jest.fn(),
  },
  people: {
    findPersonById: jest.fn(),
  },
  search: {
    movie: jest.fn(),
    show: jest.fn(),
    person: jest.fn(),
  },
};
