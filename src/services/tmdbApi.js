import axios from "axios";

//Configure Axios for the TMDb API.
const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "en-US",
  },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY_AUTHORIZATION}`,
  },
});

export const getPopularMovies = (page = 1) => {
  return API.get("/movie/popular", { params: { page } });
};

export const getMovieDetails = async (id) => {
  return API.get(`/movie/${id}`);
};

export const getMovieVideos = async (id) => {
  return API.get(`/movie/${id}/videos`);
};

export const getProviders = async (id) => {
  return API.get(`/movie/${id}/watch/providers`);
};

export const searchMovies = (query, page = 1) => {
  return API.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
};
