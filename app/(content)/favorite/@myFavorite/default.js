import MovieCard from "@/components/header/card/movieCard";
import { fetchMovies } from "@/lib/apiCall";

const MyFavorite = async () => {
  const moviesList = await fetchMovies();
  const movies = moviesList.slice(0, 6);
  return (
    <>
      <h1>My favorite movies</h1>
      {/* <ul> */}
      {/* {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
      <MovieCard movies={movies}></MovieCard>
    </>
  );
};

export default MyFavorite;
