<template>
  <section
    v-if="movieDetails"
    class="home-header q-px-md col justify-center items-center"
  >
    <q-card class="bg-transparent">
      <span class="text-white text-weight-light">Trending movie:</span>

      <h2 class="text-white text-weight-bold q-mt-lg | title-movie">
        {{ movieDetails.original_title }}
      </h2>
      <div
        class="text-body1 text-grey-7 text-weight-bold q-mt-sm row justify-between | info-movie-header"
      >
        <span> {{ `IMDb ${movieDetails.vote_average}` }} </span>
        <span>{{ formattMovieDuration(movieDetails.runtime) }}</span>
        <span>{{ getYear(movieDetails.release_date) }}</span>

        <div class="age">
          <span class="text-white">{{ movieDetails.original_language }}</span>
        </div>
      </div>

      <p class="text-white text-weight-medium text-body1 q-mt-sm">
        {{ formatGenresHomeMovie(movieDetails.genres) }}
      </p>
    </q-card>

    <!-- icon play -->
    <div class="play-container">
      <q-icon
        class="button-play bg-transparent"
        @click="goToMovieDetails(movieDetails.id)"
      >
        <q-img src="../assets/play-icon.png" width="37px" class="icon-play" />
      </q-icon>
    </div>

    <!-- background image -->
    <q-img
      :src="formattUrlPosterMovie(movieDetails.backdrop_path, 'w1280')"
      class="background-header-image"
    />
  </section>
</template>

<script setup>
import { useMovies } from "src/composables/useMovies";
import {
  formatGenresHomeMovie,
  formattMovieDuration,
  formattUrlPosterMovie,
  getYear,
} from "src/utils/utils";
import { onMounted } from "vue";
import { useNavigation } from "../composables/useNavigation";

const {
  fetchMovieDetails,
  movieDetails,
  getMostPopularMovie,
  fetchPopularMovies,
} = useMovies();

const { goToMovieDetails } = useNavigation();

onMounted(async () => {
  await fetchPopularMovies();
  const mostPopularMovieId = getMostPopularMovie();
  await fetchMovieDetails(mostPopularMovieId);
});
</script>

<style>
.home-header {
  position: relative;
  height: 368px;
  max-height: 668px;
}

.button-play {
  position: relative;
  width: 78px;
  height: 78px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.button-play:hover {
  transform: scale(1.2);
}

.button-play::before {
  content: "";
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  opacity: 0.1;
}

.background-header-image {
  position: absolute;
  top: -10rem;
  left: 0;
  z-index: -10;
  opacity: 0.4;

  mask-image: linear-gradient(transparent, black 60%, transparent);
  object-fit: cover;
  object-position: center;
}

.age {
  background-color: rgba(255, 255, 255, 0.2);
  width: 46px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}

.info-movie-header {
  width: 350px;
}

.title-movie {
  font-size: 35px;
}

.play-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

@media (min-width: 768px) {
  .title-movie {
    font-size: 60px;
  }

  .home-header {
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
    height: 498px;
  }

  .button-play {
    width: 130px;
    height: 130px;
  }

  .icon-play {
    min-width: 83px;
    min-height: 83px;
  }
}
</style>
