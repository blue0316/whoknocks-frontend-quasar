<script setup>
import { ref } from 'vue'

const slide = ref(1)

</script>
<template>
  <div class="background flex flex-column justify-end">
    <q-carousel
      v-model="slide"
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      padding
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      infinite
      height="700px"
      class="carousel-shadow"
      autoplay
    >
      <q-carousel-slide :name="1" img-src="src/assets/carousel/01_slide.png">
        <q-scroll-area class="fit">
          <h1>
            prova
          </h1>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="src/assets/carousel/02_slide.png" />
    </q-carousel>
  </div>
</template>

<style scoped>
.background {
  background-color: #212121;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.carousel-shadow {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5), 0 -10px 10px -10px rgba(0, 0, 0, 0.5);
}
</style>