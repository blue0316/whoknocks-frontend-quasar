<script setup>
import { ref, onMounted, computed } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

import modelsData from '../mockup/index.json';

const router = useRouter();
const models = ref(modelsData);
const loadedImages = ref(models.value.map(() => false));

const chunkSize = 5;
const chunkedModels = computed(() => {
  const result = [];
  for (let i = 0; i < models.value.length; i += chunkSize) {
    result.push(models.value.slice(i, i + chunkSize));
  }
  return result;
});

// Function to navigate to model detail page
function goToModel(modelId) {
  router.push({ name: 'ModelDetail', params: { id: modelId }});
}

function loadImage(model, index) {
  const img = new Image();
  img.src = model.imagePath; // Use the imagePath from the model directly
  img.onload = () => {
    loadedImages.value[index] = true;
  };
}

onMounted(() => {
  models.value.forEach((model, index) => {
    loadImage(model, index);
  });
});

const slide = ref(1)

</script>
<template>
  <div class="background">
    <h2 class="text-center" style="font-weight: 800;">DISCOVER OUR BUILDINGS</h2>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      padding
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      :autoplay="5000"
      class="gt-sm carousel"
      style="background-color: #212121; height: 270px;"
    >
      <q-carousel-slide
      v-for="(group, groupIndex) in chunkedModels"
      :key="groupIndex"
      :name="groupIndex.toString()"
      class="model-slide-container"
      >
        <div 
          v-for="(model, index) in group" 
          :key="model.id" 
          class="model-item bg-cover" 
          :class="{ 'is-loaded': loadedImages[groupIndex * chunkSize + index] }" 
        >
          <!-- Model Image -->
          <img :src="model.imagePath" class="model-image" alt="Model Image" @click="goToModel(model.id)">
          <!-- Model Title Button -->
          <q-btn flat color="white" class="model-title" @click="goToModel(model.id)">{{ model.name }}</q-btn>
        </div>
      </q-carousel-slide>
      <!-- <q-carousel-slide :name="5" class="bg-city" :class="{ loadedCity: loadedCity }" style="display: flex; justify-content: center; align-items: flex-end;">
          
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="bg-sequence" :class="{ loadedSequence: loadedSequence }" style="display: flex; justify-content: center; align-items: flex-end;">
         
      </q-carousel-slide> -->
    </q-carousel>
    
</div>
</template>
<style scoped>
.background {
  background-color: #212121;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 50px;
  min-height: 500px;
  width: 100%;
}
.carousel-shadow {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5), 0 -10px 10px -10px rgba(0, 0, 0, 0.5);
}

.bg-gradient {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5));
  
}

.bg-live {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_live_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover; 
  transition: background-image 0.5s ease-in-out;
}

.bg-live.loadedLive {
  background-image: url("../assets/carousel/slide_live.png");
}

.bg-play {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_play_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover;
}

.bg-play.loadedPlay {
  background-image: url("../assets/carousel/slide_play.png");
}

.bg-business {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_business_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover;
}

.bg-business.loadedBusiness {
  background-image: url("../assets/carousel/slide_business.png");
}

.bg-build {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_build_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover;
}

.bg-build.loadedSequence {
  background-image: url("../assets/carousel/slide_build.png");
}

.bg-city {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/modelviewer/metarise_21.png");
  background-color: no-repeat;
  background-size: cover;
}

.bg-sequence {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/modelviewer/Podcast.png");
  background-color: no-repeat;
  background-size: cover;
}

.bg-brands {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_brands_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover;
}

.bg-brands.loadedCity {
  background-image: url("../assets/carousel/slide_brands.png");
}

.container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 200px
}

.marquee.start-animation {
  animation-play-state: running;
}

.marquee-mobile {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  /* your existing CSS for the marquee */
  animation-play-state: paused;
}

.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}

.marquee1 span {   
  animation-delay: -2.5s; 
}

.marquee2 span {
  animation-delay: 0s;
}

.carousel-position {
  position: absolute; bottom: 0; width: 100%; text-align: center;
}

.carousel {
  /* Limit the maximum width to contain 4 items */
  max-width: 1200px; /* Each item is assumed to be 250px wide */
  margin: auto;
}

.model-slide {
  /* Assign a fixed width to each slide */
  width: 250px;
  /* Adjust other styling as necessary */
}

.model-slide-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.model-item {
  width: calc(100% / 4); /* Adjust width as needed */
  cursor: pointer;
  position: relative; /* Required for absolute positioning of the title */
  background: #2D2D2D;
}

.model-image {
  background-size: cover;
  background-position: center;
  height: 130px; /* Adjust height as needed */
  width: 100%;
}

.model-title {
  position: absolute;
  bottom: 15px; /* Positioning from the bottom of .model-item */
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px; /* Adjust padding as needed */
  border-radius: 50px;
  background-color: #63D4CD; /* Semi-transparent background */
  color: white; /* Title text color */
  font-weight: bold;
  width: 80%;
  white-space: nowrap; /* Prevents text wrap */
  overflow: hidden; /* Hides overflow */
  text-overflow: ellipsis;
}

/* Make sure images are loaded with proper aspect ratio and size */
.is-loaded {
  opacity: 1;
}


@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>