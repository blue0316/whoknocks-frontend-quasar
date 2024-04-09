<script setup>
import { ref, onMounted } from 'vue';


const loaded = ref(false);

onMounted(() => {
  const img = new Image();
  img.src = 'src/assets/backgrounds/01_home_bg.png';
  console.log(img.src);
  img.onload = () => {
    loaded.value = true;
  };
});
</script>
<template>
  <div class="background" :class="{ loaded: loaded }">
    <section data-scroll-container>
      <div class="row justify-center align-center" style="height: 100vh; flex-direction: column;">
      <section data-scroll-section>
  
      <div class="col-12">
        <div 
          style="font-size: 82.5px; text-align: center; margin: 0; line-height: 80%; font-weight: bold; margin-left: 60px; margin-right: 60px;"
          class="gt-sm"
        >
          EMPOWER YOUR LIFE <br> in a new <span style="font-size: 120px; line-height: 1;">REALITY</span>
      </div>
        <div 
          style="font-size: 45px; text-align: center; margin: 0; line-height: 80%; font-weight: bold; margin-left: 10px; margin-right: 10px;"
          class="lt-md"
        >
          EMPOWER YOUR LIFE in a new <span style="font-size: 70px; line-height: 1;">REALITY</span>
      </div>
      </div>
      </section>
    </div>
    </section>
  </div>
</template>

<style scoped>
  .background {
    background-image: url('../assets/backgrounds/01_home_bg_placeholder.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    transition: background-image 0.5s ease-in-out;
  }
  .background.loaded {
    background-image: url('../assets/backgrounds/01_home_bg.png');
  }
</style>
