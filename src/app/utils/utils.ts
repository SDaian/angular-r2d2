export function extractId(personData) {
  const extractedId = personData
    .replace('https://swapi.co/api/people/', '')
    .replace('/', '');
  return Number(extractedId);
}

export function extractMovieId(movieUrl) {
  const extractedId = movieUrl
    .replace('https://swapi.co/api/films/', '')
    .replace('/', '');
  return Number(extractedId);
}