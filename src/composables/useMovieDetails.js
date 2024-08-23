import {
  formattDateForEachMovie,
  formattMovieDuration,
  formattUrlPosterMovie,
  getYouTubeLink,
} from "src/utils/utils";
import { ref } from "vue";
import { useMovies } from "./useMovies";

export function useMovieDetails() {
  const {
    fetchMovieDetails,
    movieDetails,
    fetchMovieVideos,
    videoTrailer,
    fetchProviders,
    providersMovie,
  } = useMovies();

  //structure of a film
  const movieDetailsForShow = ref({
    date: null,
    language: null,
    title: null,
    description: null,
    match: null,
    duration: null,
    image: null,
    trailerLink: null,
    providerLink: null,
  });

  //necessary information about the movie, as well as videos and links.
  const loadMovieDetails = async (movieId) => {
    await fetchMovieDetails(movieId);
    await fetchMovieVideos(movieId);
    await fetchProviders(movieId);

    movieDetailsForShow.value = {
      date: formattDateForEachMovie(movieDetails.value.release_date),
      title: movieDetails.value.original_title,
      description: movieDetails.value.overview,
      duration: formattMovieDuration(movieDetails.value.runtime),
      image: formattUrlPosterMovie(movieDetails.value.backdrop_path, "w1280"),
      language: movieDetails.value.original_language,
      match: movieDetails.value.vote_average * 10,
      trailerLink: getYouTubeLink(videoTrailer.value),
    };
  };

  //go to the trailer of the movie or watch it on platforms
  const goToTrailer = () => {
    window.open(movieDetailsForShow.value.trailerLink, "_blank");
  };

  const goToSeeMovie = () => {
    window.open(providersMovie.value, "_blank");
  };

  return {
    movieDetailsForShow,
    loadMovieDetails,
    goToTrailer,
    goToSeeMovie,
  };
}
