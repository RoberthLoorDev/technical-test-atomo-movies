import { useRouter } from "vue-router";

export const useNavigation = () => {
  const router = useRouter();

  const goToMovieDetails = (movieId) => {
    router.push({ name: "MovieDetails", params: { id: movieId } });
  };

  return {
    goToMovieDetails,
  };
};
