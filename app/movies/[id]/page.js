import fakeData from "@/data/fake-data";
import Image from "next/image";
import { notFound } from "next/navigation";

const MoviesDetailPage = async ({ params }) => {
  const { id } = await params;
  const moviesItem = fakeData.find((moviesItem) => moviesItem.id === id);
  if (!moviesItem) {
    notFound();
  }
  return (
    <div>
      <header className="detail-header">
        <h1>{moviesItem.title}</h1>
        <Image
          src={moviesItem.image}
          width={200}
          height={200}
          alt="detail image"
        />
      </header>
      <main className="detail-main">
        <ul>
          <li>
            <span>Vote:</span> {moviesItem.vote_average}
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
