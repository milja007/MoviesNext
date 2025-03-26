"use client";
import { fetchData } from "@/lib/apiCall";
import { useState, useEffect } from "react";
import MovieCard from "@/components/header/card/movieCard";

const MoviePage = () => {
  const [moviesData, setMoviesData] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchData();
      setMoviesData(data);
    };
    fetchMovies();
  }, []);

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
        {moviesData.loading && <p>Loading Movies...</p>}
        {moviesData.error && <p>Error:{moviesData.error}</p>}
        {moviesData.data && <MovieCard movies={moviesData.data} />}
        {/* <MovieCard movies={movies} /> */}
      </main>
    </div>
  );
};

export default MoviePage;
