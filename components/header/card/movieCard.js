import Link from "next/link";
import Image from "next/image";

const MovieCard = ({ movies }) => {
  return (
    <ul className="ul">
      {movies.map((movie) => (
        <li key={movie.id} className="card">
          <Link href={`/movies/${movie.id}`}>
            <Image src={movie.image} width={200} height={200} alt="moviedata" />
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
