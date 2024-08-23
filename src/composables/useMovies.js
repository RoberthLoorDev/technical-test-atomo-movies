import { ref } from "vue";
import axios from "axios";

export function useMovieApi() {
  const movies = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchMovies = async (endpoint, page = 1) => {
    loading.value = true;
    error.value = null;

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3${endpoint}`,
      params: { language: "en-US", page: page.toString() },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY_AUTHORIZATION}`,
      },
    };

    try {
      const response = await axios.request(options);
      movies.value = response.data.results;
    } catch (e) {
      error.value = "Error fetching movies. Please try again.";
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  const getPopularMovies = (page = 1) => fetchMovies("/movie/popular", page);

  return {
    movies,
    loading,
    error,
    getPopularMovies,
  };
}
