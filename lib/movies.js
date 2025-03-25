import fakeData from "@/data/fake-data";

export function getAllMovies() {
  return fakeData;
}

export function getFavoritesMovies() {
  return fakeData.slice(0, 3);
}

export function getMoviesByGenre(genre) {
  return fakeData.filter((movie) => movie.genre === genre);
}

const getUniqueGenres = () => {
  const genres = new Set();

  fakeData.forEach((movie) => {
    genres.add(movie.genre);
  });

  return Array.from(genres);
};

export default getUniqueGenres;

export function getMovieYearsByGenre(genre) {
  const filteredMovies = fakeData.filter((movie) => movie.genre === genre);

  const movieYears = filteredMovies.map(
    (movie) => movie.release_date.split("-")[0]
  );

  return movieYears;
}

export function getMoviesByGenreAndYear(genre, year) {
  const filteredMovies = fakeData.filter(
    (movie) =>
      movie.genre === genre && movie.release_date.split("-")[0] === year
  );

  return filteredMovies;
}
