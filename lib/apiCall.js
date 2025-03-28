import fakeData from "@/data/fake-data";

export const fetchData = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  try {
    const response = await fetch(FEATURED_API);
    const data = await response.json();
    return {
      loading: false,
      error: null,
      data: data.results,
    };
  } catch (error) {
    return { loading: false, error: error.message, data: null };
  }
};

export const fetchMovies = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const response = await fetch(FEATURED_API);
  if (!response.ok) {
    throw new Eror("Data can not be fetched");
  }
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.results;
};

export const getMoviesDetail = async (id) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const DETAIL_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  try {
    const response = await fetch(DETAIL_API);
    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUniqueGenres = () => {
  const genres = new Set();

  fakeData.forEach((movie) => {
    genres.add(movie.genre);
  });

  return Array.from(genres);
};

export const getMoviesByGenre = async (genreNumber) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const DISCOVER_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreNumber}`;
  try {
    const response = await fetch(DISCOVER_API);
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMovieYearsByGenre = async (genreName) => {
  const movies = await getMoviesByGenre(genreName);
  const movieYears = movies.map((movie) => movie.release_date.split("-")[0]);
  return Array.from(new Set(movieYears));
};

export const getMoviesByGenreAndYear = async (genreNumber, genreYear) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const DISCOVER_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreNumber}&primary_release_year=${genreYear}`;

  try {
    const response = await fetch(DISCOVER_API);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error fetching movies by genre and year:", error);
    return [];
  }
};
