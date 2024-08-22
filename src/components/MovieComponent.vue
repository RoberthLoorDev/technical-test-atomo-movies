<template>
  <q-card class="movie-container">
    <q-img
      src="../assets/image-movie.png"
      class="rounded-lg"
      style="border-radius: 7px"
    />
    <div class="info-movie">
      <span class="date-movie">Jun 14th 2017</span>
      <span class="title-movie">Interestelar</span>
      <p class="movie-description">
        This is a brief description of the movie. This is a brief description of
        the movie...
      </p>
    </div>
  </q-card>
</template>

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
}

.movie-container .movie-description {
  color: #8d8e96;
  margin-top: 10px;
}
</style>
