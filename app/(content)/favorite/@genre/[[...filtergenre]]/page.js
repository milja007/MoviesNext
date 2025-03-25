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
  const { filtergenre } = params;
  let genres = getUniqueGenres();
  const selectedGenre = filtergenre?.[0];
  const selectedYear = filtergenre?.[1];
  let moviesContent = null;
  let movies = [];

  if (selectedGenre) {
    if (!selectedYear) {
      movies = getMoviesByGenre(selectedGenre);
      genres = getMovieYearsByGenre(selectedGenre);
    } else {
      movies = getMoviesByGenreAndYear(selectedGenre, selectedYear);
      genres = [];
    }

    if (movies.length > 0) {
      moviesContent = <MovieCard movies={movies} />;
    } else {
      moviesContent = <p>No movies found for your selected feature!</p>;
    }
  }

  if (
    (selectedGenre && !getUniqueGenres().includes(selectedGenre)) ||
    (selectedYear &&
      !getMovieYearsByGenre(selectedGenre)?.includes(selectedYear))
  ) {
    throw new Error("This page not found, Invalid path name");
  }

  return (
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
      </ul>
      {selectedGenre && moviesContent}
    </div>
  );
};

export default GenreMovie;
