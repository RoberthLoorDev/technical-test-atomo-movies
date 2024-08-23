<template>
  <q-page>
    <HeaderHome />
    <MoviesSection :movie-list="movies" />
  </q-page>
</template>

<script setup>
import HeaderHome from "src/sections/HeaderHomeSection.vue";
import MoviesSection from "src/sections/MoviesSection.vue";
import { ref, onMounted } from "vue";
import { useMovies } from "src/composables/useMovies";

const { fetchPopularMovies, movies } = useMovies();

onMounted(() => {
  fetchPopularMovies();
});

defineOptions({
  name: "IndexPage",
});
</script>
