<script setup>
import { onMounted, onUnmounted } from 'vue';
import LocomotiveScroll from 'locomotive-scroll';

onMounted(() => {
    scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: .2
        // Add more options as needed
    });
});

onUnmounted(() => {
    scroll.destroy();
});
</script>
<template>
<div class="background">
  <div class="row justify-center align-center" style="height: 100vh; flex-direction: column;">
    <section data-scroll-section>

		<div class="col-12">
			<p style="font-size: 100px; color: transparent; -webkit-text-stroke: 3px white; text-align: center; margin: 0">
				EMPOWER YOUR LIFE
			</p>
		</div>
    </section>

    <!-- section with different speed multiplier -->
    <section data-scroll-section data-scroll-speed="0.5">
  
      <div class="row justify-center">
        <p style="font-size:50px; color: white; margin: 0">
          in a new
        </p>
        <p style="font-size:80px; color: white; margin: 0">
          REALITY
        </p>
      </div>
    </section> 
  </div>
</div>
</template>
<style scoped>
    /* Set bg to src/assets/backgrounds/Bar_Under_Tower_2_1.png */
    .background {
        background: url('/src/assets/backgrounds/01_home_bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100vh; /* Adjust as needed */
        width: 100%; /* Adjust as needed */
    }
</style>
