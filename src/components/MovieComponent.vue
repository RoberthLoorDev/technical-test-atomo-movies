<template>
  <q-card class="movie-container">
    <q-img :src="imageUrl" class="rounded-lg" style="border-radius: 7px" />
    <div class="info-movie">
      <span class="date-movie">{{ dateMovie }}</span>
      <span class="title-movie">{{ props.title }}</span>
      <p class="movie-description">
        {{ props.shortDescription }}
      </p>
    </div>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import {
  formattDateForEachMovie,
  formattUrlPosterMovie,
} from "src/utils/utils";

const dateMovie = ref(null);
const imageUrl = ref(null);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

dateMovie.value = formattDateForEachMovie(props.date);
imageUrl.value = formattUrlPosterMovie(props.image);
</script>

<style>
.movie-container {
  position: relative;
  border-radius: 7px;
  transition: transform 0.2s ease;
  cursor: pointer;
  margin-bottom: 95px;
}

.movie-container:hover {
  transform: scale(1.05);
}

.movie-container .info-movie {
  position: absolute;
  margin-top: -50px;
  z-index: 2;
  padding: 10px;
  background-color: #1c1d2d;
}

.movie-container .date-movie {
  display: block;
  color: #8d8e96;
  font-size: 12px;
}

.movie-container .title-movie {
  font-size: 18px;
  font-weight: 600;
  color: white;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
}

.movie-container .movie-description {
  color: #8d8e96;
  margin-top: 10px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
}
</style>
