//composable that communicates with the api file and processes the data.

import { ref } from "vue";
import {
  getMovieDetails,
  getMovieVideos,
  getPopularMovies,
  getProviders,
  searchMovies,
} from "../services/tmdbApi.js";

export function useMovies() {
  const movies = ref([]);
  const movieDetails = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const mostPopularMovie = ref(null);
  const videosMovie = ref(null);
  const videoTrailer = ref(null);
  const providersMovie = ref(null);

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

  const getMostPopularMovie = () => {
    return movies.value[0].id;
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

  const fetchMovieVideos = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await getMovieVideos(id);
      const videos = response.data.results;
      videoTrailer.value = videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
    } catch (e) {
      error.value = "Error fetching movie videos";
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  const fetchProviders = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await getProviders(id);
      const providers = response.data.results.US.link;
      providersMovie.value = providers;
    } catch (e) {
      error.value = "Error fetching movie providers";
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  const searchForMovies = async (query, page = 1) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await searchMovies(query, page);
      movies.value = response.data.results;
    } catch (e) {
      error.value = "Error searching movies";
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
    mostPopularMovie,
    getMostPopularMovie,
    fetchMovieVideos,
    videosMovie,
    videoTrailer,
    fetchProviders,
    providersMovie,
    searchForMovies,
  };
}
