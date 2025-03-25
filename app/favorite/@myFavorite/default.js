import MovieCard from "@/components/header/card/movieCard";
import { getFavoritesMovies } from "@/lib/movies";

const MyFavorite = () => {
  const movies = getFavoritesMovies();
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
