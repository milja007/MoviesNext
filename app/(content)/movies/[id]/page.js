// import fakeData from "@/data/fake-data";
import { getMoviesDetail } from "@/lib/apiCall";
import Image from "next/image";
import { notFound } from "next/navigation";

const MoviesDetailPage = async ({ params }) => {
  const movieiId = params?.id;
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const moviesItem = await getMoviesDetail(movieiId);
  // const moviesItem = fakeData.find((moviesItem) => moviesItem.id === id);
  if (!moviesItem) {
    notFound();
  }
  return (
    <div>
      <header className="detail-header">
        <h1>{moviesItem.title}</h1>
        <Image
          src={IMG_API + moviesItem.poster_path}
          width={200}
          height={200}
          alt="poster"
          priority
        />
      </header>
      <main className="detail-main">
        <ul>
          <li>
            <span>Vote:</span> {moviesItem.vote_average?.toFixed(1)}
          </li>
          <li>
            <span>Release Date:</span> {moviesItem.release_date}
          </li>
          <li>
            <span>Overview:</span> {moviesItem.overview}
          </li>
        </ul>
      </main>
    </div>
  );
};

export default MoviesDetailPage;
