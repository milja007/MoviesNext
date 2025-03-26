import Link from "next/link";
import Image from "next/image";

const MovieCard = ({ movies }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <ul className="ul">
      {movies?.map((movie) => (
        <li key={movie.id} className="card">
          <Link href={`/movies/${movie.id}`}>
            <Image
              src={IMG_API + movie.poster_path}
              width={200}
              height={200}
              alt="poster"
              priority
            />
            <div className="cardBottom">
              <p>Title: {movie.title}</p>
              <span>Vote: {movie.vote_average}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieCard;
