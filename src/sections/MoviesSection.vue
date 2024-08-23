<template>
  <!--  -->
  <section class="movies-section">
    <!-- search -->
    <q-form @submit.prevent="handleSearch">
      <div class="input-container">
        <q-input
          color="white"
          class="col | input-search"
          label-color="white"
          placeholder="Search by name"
          input-style="color: white; padding-left: 15px"
          v-model="searchQuery"
        />

        <q-img
          src="../assets/search-icon.png"
          width="19px"
          height="19px"
          class="icon-search"
        />
      </div>
    </q-form>

    <!-- movies content -->
    <div class="movies-container">
      <MovieComponent
        v-for="movie in moviesToDisplay"
        :key="movie.id"
        :id="movie.id"
        :title="movie.original_title"
        :date="movie.release_date"
        :short-description="movie.overview"
        :image="movie.poster_path"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import MovieComponent from "src/components/MovieComponent.vue";
import { useMovies } from "src/composables/useMovies";
const props = defineProps({
  movieList: Array,
});

const searchQuery = ref(null);
const { movies, searchForMovies } = useMovies();

const handleSearch = () => {
  if (searchQuery.value) {
    searchForMovies(searchQuery.value);
  } else {
    movies.value = props.movieList;
  }
};

const moviesToDisplay = computed(() => {
  return movies.value.length > 0 ? movies.value : props.movieList;
});
</script>

<style>
.movies-section {
  margin: 0 100px;
  margin-bottom: 10rem;
}

.input-container {
  position: relative;
  background-color: #1c1d2d;
  height: 56px;
  border-radius: 5px;
  width: 293px;
}

.icon-search {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

/* movies */
.movies-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(209px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
</style>
