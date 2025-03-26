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

const getUniqueGenres = () => {
  const genres = new Set();

  fakeData.forEach((movie) => {
    genres.add(movie.genre);
  });

  return Array.from(genres);
};
