export const errorMessage = {
  showNotFound: 'Show with that id does not exists.',
  seasonNotFound: 'Season number does not exists.',
  episodeNotFound: 'Episode number does not exists.',
  movieNotFound: 'Movie with that id does not exists.',
  personNotFound: 'Person with that id does not exists.',
  noConnection: "No response, please check the server's internet connection.",
  invalidApiKey: 'Invalid API key',
  serverError: (statusText: string) => `TMDB Server Error ${statusText}`,
};
