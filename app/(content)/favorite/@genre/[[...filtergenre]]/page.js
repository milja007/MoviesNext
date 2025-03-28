import { getMovieYearsByGenre } from "@/lib/apiCall";
import Link from "next/link";
import getUniqueGenres from "@/lib/movies";
import FilterMovies from "@/components/header/suspense/filtered-movies";
import { Suspense } from "react";
import SuspenseLoading from "@/components/header/suspense/suspense-loading";

const GenreMovie = async function ({ params }) {
  const { filtergenre } = await params;
  let genres = getUniqueGenres();
  const genreMap = {
    Adventure: 12,
    Animation: 16,
    Horror: 27,
    History: 36,
  };
  const selectedGenre = filtergenre?.[0];
  const selectedYear = filtergenre?.[1];
  const selectedGenreNumber = genreMap[selectedGenre];

  if (selectedGenreNumber && !selectedYear) {
    genres = await getMovieYearsByGenre(selectedGenreNumber);
  }
  if (selectedGenre && selectedYear) {
    genres = [];
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
      <Suspense fallback={<SuspenseLoading />}>
        <FilterMovies
          selectedGenreNumber={selectedGenreNumber}
          selectedYear={selectedYear}
        />
      </Suspense>

      {/* {selectedGenre && moviesContent} */}
    </div>
  );
};

export default GenreMovie;
