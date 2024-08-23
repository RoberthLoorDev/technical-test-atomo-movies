<template>
  <section class="movies-section" v-if="movieSearch">
    <q-form @submit.prevent="movieSearch.handleSearch">
      <div class="input-container">
        <q-input
          v-model="movieSearch.searchQuery"
          color="white"
          class="col | input-search"
          label-color="white"
          placeholder="Search by name"
          input-style="color: white; padding-left: 15px"
        />
        <q-img
          src="../assets/search-icon.png"
          width="19px"
          height="19px"
          class="icon-search"
        />
      </div>
    </q-form>

    <q-list class="movies-container">
      <MovieComponent
        v-for="movie in movieSearch.moviesToDisplay"
        :key="movie.id"
        :id="movie.id"
        :title="movie.original_title"
        :date="movie.release_date"
        :short-description="movie.overview"
        :image="movie.poster_path"
      />
    </q-list>
  </section>
</template>

<script setup>
import { useMovieSearch } from "src/composables/useMovieSearch";
import MovieComponent from "src/components/MovieComponent.vue";
import { watch, ref, nextTick } from "vue";

const props = defineProps({
  movieList: {
    type: Array,
    required: true,
  },
});

const movieSearch = ref(null);

watch(
  () => props.movieList,
  async (newMovieList) => {
    if (newMovieList && newMovieList.length > 0) {
      await nextTick();
      movieSearch.value = useMovieSearch(newMovieList);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
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

.movies-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(209px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
</style>
