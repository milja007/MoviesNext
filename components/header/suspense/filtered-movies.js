import { getMoviesByGenre, getMoviesByGenreAndYear } from "@/lib/apiCall";
import MovieCard from "../card/movieCard";

const FilterMovies = async ({ selectedGenreNumber, selectedYear }) => {
  let movies;
  if (selectedGenreNumber && !selectedYear) {
    movies = await getMoviesByGenre(selectedGenreNumber);
  } else if (selectedGenreNumber && selectedYear) {
    movies = await getMoviesByGenreAndYear(selectedGenreNumber, selectedYear);
  }
  let moviesContent = <p>No movies found for your selected feature</p>;
  if (movies && movies.length > 0) {
    moviesContent = <MovieCard movies={movies} />;
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return moviesContent;
};

export default FilterMovies;
