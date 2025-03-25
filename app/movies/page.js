import fakeData from "@/data/fake-data";
import Link from "next/link";
import Image from "next/image";
import MovieCard from "@/components/header/card/movieCard";

const MoviePage = () => {
  return (
    <div>
      <header>
        <h1>Movie Page</h1>
      </header>
      <main>
        {/* <ul className="ul">
          {fakeData.map((moviesItem) => (
            <li key={moviesItem.id} className="card">
              <Link href={`/movies/${moviesItem.id}`}>
                <Image
                  src={moviesItem.image}
                  width={200}
                  height={200}
                  alt="moviesitemdata"
                />
                <div className="cardBottom">
                  <p>Title: {moviesItem.title}</p>
                  <span>Vote: {moviesItem.vote_average}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul> */}
        <MovieCard movies={fakeData} />
      </main>
    </div>
  );
};

export default MoviePage;
