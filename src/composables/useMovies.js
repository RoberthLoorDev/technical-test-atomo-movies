import { ref } from "vue";
import { getMovieDetails, getPopularMovies } from "../services/tmdbApi.js";

export function useMovies() {
  const movies = ref([]);
  const movieDetails = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchPopularMovies = async (page = 1) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await getPopularMovies(page);
      movies.value = response.data.results;
    } catch (e) {
      error.value = "Error fetching popular movies";
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  const fetchMovieDetails = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await getMovieDetails(id);
      movieDetails.value = response.data;
    } catch (e) {
      error.value = "Error fetching movie details";
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  return {
    movies,
    movieDetails,
    loading,
    error,
    fetchPopularMovies,
    fetchMovieDetails,
  };
}
