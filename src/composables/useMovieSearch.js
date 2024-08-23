//composable to search for movies by name
import { ref, computed, watch } from "vue";
import { useMovies } from "./useMovies";

export function useMovieSearch(initialMovieList) {
  const { movies, searchForMovies } = useMovies();
  const searchQuery = ref("");

  //see the changes in the list of movies when searching or stop searching
  watch(
    () => initialMovieList,
    (newList) => {
      if (newList && newList.length > 0) {
        movies.value = newList;
      }
    },
    { immediate: true }
  );

  //search for movies or reset the initial list.
  const handleSearch = () => {
    if (searchQuery.value.trim()) {
      searchForMovies(searchQuery.value);
    } else {
      movies.value = initialMovieList;
    }
  };

  const moviesToDisplay = computed(() => {
    return movies.value.length > 0 ? movies.value : initialMovieList;
  });

  return {
    searchQuery,
    handleSearch,
    moviesToDisplay,
  };
}
