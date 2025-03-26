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
