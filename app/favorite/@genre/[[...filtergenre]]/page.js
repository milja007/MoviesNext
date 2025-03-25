// import MovieCard from "@/components/header/card/movieCard";
import MovieCard from "@/components/header/card/movieCard";
import getUniqueGenres, {
  getMoviesByGenre,
  getMoviesByGenreAndYear,
  getMovieYearsByGenre,
} from "@/lib/movies";
import Link from "next/link";

//KO NEKA LUDA PROPS /PARALEL KURCINA PO IMENU OVDJE genres
//capturing dynamic data se zove
const GenreMovie = async function ({ params }) {
  // const movies = getMoviesByGenre(genreMovies);
  const { filtergenre } = await params;
  let genres = getUniqueGenres();
  const selectedGenre = filtergenre?.[0];
  const selectedYear = filtergenre?.[1];
  let movies;
  if (selectedGenre && !selectedYear) {
    movies = getMoviesByGenre(selectedGenre);
    genres = getMovieYearsByGenre(selectedGenre);
  }
  if (selectedGenre && selectedYear) {
    movies = getMoviesByGenreAndYear(selectedGenre, selectedYear);
    genres = [];
  }
  let moviesContent = <p>No movies found for your selected feature!</p>;
  if (movies && movies.length > 0) {
    moviesContent = <MovieCard movies={movies} />;
  }
  if (
    (selectedGenre && !getUniqueGenres().includes(selectedGenre)) ||
    (selectedYear &&
      !getMovieYearsByGenre(selectedGenre).includes(selectedYear))
  ) {
    throw new Error("This page not found, Invalid path name");
  }
  return (
    // <div>
    //   <ul>
    //     {movies.map((movie) => (
    //       <li key={movie.id}>{movie.title}</li>
    //     ))}
    //   </ul>
    //   <MovieCard movies={movies} />
    // </div>
    <div>
      <ul className="ul">
        {genres.map((genre) => {
          const href = selectedGenre
            ? `/favorite/${selectedGenre}/${genre}`
            : `/favorite/${genre}`;
          return (
            <li key={genre}>
              <Link href={href}>{genre}</Link>
            </li>
          );
        })}
        {/* {genres.map((genre) => (
          <li key={genre}>
            <Link href={`/favorite/${genre}`}>{genre}</Link>
          </li>
        ))} */}
      </ul>
      {moviesContent}
    </div>
  );
};

export default GenreMovie;
