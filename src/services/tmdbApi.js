import axios from "axios";

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
