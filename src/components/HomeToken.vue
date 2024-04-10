<script setup>
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const startAnimation = ref(false);

const countdownTime = ref('00 : 00 : 00');

onMounted(() => {
  const targetTime = new Date("May 24, 2024 11:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    countdownTime.value = `${days} : ${hours} : ${minutes}`;
  }, 1000);

  setTimeout(() => {
    startAnimation.value = true;
  }, 2000);
});

function openNewPage() {
    window.open('https://forms.gle/rZKeptLoa7K8Mib5A', '_blank');
}
</script>
<template>
<div class="background">
    <div style="padding-top: 100px;">
        <div class="text-center text-h-desktop-extrabold col-12 gt-sm">
            EMPOWERING <span style="color: #86ECE9;"> POSSIBILITIES </span>
        </div>
        <div class="text-center q-px-md text-h-mobile-extrabold col-12 lt-md" style="font-size: 25px;">
            EMPOWERING <span style="color: #86ECE9;"> <br> POSSIBILITIES</span>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 40px;">
  <div class="text-center text-p-desktop gt-sm" style="text-align: center; max-width: 800px;">
    Metarise is fueled by its official cryptocurrency $RIS, extending its utility far beyond transactions, captivating users in a web3 in a new economy of endless possibilities.
  </div>
  <div class="text-center q-px-md text-p-mobile lt-md" style="text-align: center; max-width: 400px;">
    Metarise is fueled by its official cryptocurrency $RIS, extending its utility far beyond transactions, captivating users in a web3 in a new economy of endless possibilities.
  </div>
  <div class="text-center" style="text-align: center; font-size: 20px; font-weight: bold; margin-top: 40px">
    PRIVATE SALE LIVE...
  </div>
  <q-linear-progress query color="primary" class="q-mt-md q-mx-md" style="max-width: 400px;"/>
  <div class="bg gt-xs" style="padding: 60px; display: flex; justify-content: center; align-items: center; height: 100%; margin-top: 40px;">
    <div style="background: linear-gradient(to right bottom, #28272F, #000000); font-size: 64px; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.3); padding-left: 20px; padding-right: 20px; padding-bottom: 12px;">
      {{ countdownTime }}
    </div>
  </div>
  <div class="bg lt-sm" style="padding: 45px; display: flex; justify-content: center; align-items: center; height: 100%; margin-top: 40px;">
    <div style="background: linear-gradient(to right bottom, #28272F, #000000); font-size: 40px; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.3); padding-left: 20px; padding-right: 20px; padding-bottom: 12px">
      {{ countdownTime }}
    </div>
  </div>
  <div style="font-size: 18px;">
      Want to know how to become a riser?
  </div>
  <q-btn
    label="Get in touch"
    style="margin-top: 20px; border-radius: 120px; background: linear-gradient(to right bottom, #28272F, #000000); min-width: 200px; box-shadow: 0px 0px 70px 5px #86ECE9; border: 1px solid rgba(255, 255, 255, 0.3);"
    @click="openNewPage"
  >

  </q-btn>
</div>
</div>
<div v-if="!$q.platform.is.ios" class="container">
    <div class="marquee marquee1">
      <span style="font-size: 250px; font-weight: 800;">$RIS $RIS $RIS</span>
    </div>
    <!-- <div class="marquee marquee2">
    <span style="font-size: 250px; font-weight: 800;">$RIS $RIS $RIS</span>
    </div> -->
</div>
<div v-if="$q.platform.is.ios && startAnimation" class="container">
    <div class="marquee marquee1">
      <span style="font-size: 250px; font-weight: 800;">$RIS $RIS $RIS</span>
    </div>
    <!-- <div class="marquee marquee2">
    <span style="font-size: 250px; font-weight: 800;">$RIS $RIS $RIS</span>
    </div> -->
</div>
<!-- <div class="container gt-sm">
    <div class="marquee marquee1">
    <span style="font-size: 250px; font-weight: 800;">$RIS $RIS</span>
    </div>
    <div class="marquee marquee2">
    <span style="font-size: 250px; font-weight: 800;">$RIS $RIS</span>
    </div>
</div> -->
</div>
</template>
<style scoped>
/* Set bg to src/assets/backgrounds/Bar_Under_Tower_2_1.png */
.background {
    background-color: #212121;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh; /* Adjust as needed */
    width: 100%; /* Adjust as needed */
}
.bg {
    background-image: url('../assets/glow.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.title-text {
    font-size: 50px;
    font-weight: 800;
    line-height: 1;
}

.text {
    font-size: 18px;
    max-width: 500px;
}

.title-text-small {
    font-size: 30px;
    font-weight: 800;
    line-height: 1;
}
.container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 300px
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
  animation-delay: -5s; 
}

.marquee2 span {
  animation-delay: 0s;
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
