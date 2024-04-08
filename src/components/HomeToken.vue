<script setup>
import { ref, onMounted } from 'vue';

const countdownTime = ref('00 : 00 : 00');

onMounted(() => {
  const targetTime = new Date("Apr 10, 2024 11:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;
    const hours = Math.floor(distance / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
    countdownTime.value = `${hours} : ${minutes} : ${seconds}`;
  }, 1000);
});

function openNewPage() {
    window.open('https://forms.gle/rZKeptLoa7K8Mib5A', '_blank');
}
</script>
<template>
<div class="background">
    <div style="padding-top: 100px;">
        <div class="text-center title-text col-12 gt-xs">
            EMPOWERING <span style="color: #86ECE9;"> POSSIBILITIES </span>
        </div>
        <div class="text-center title-text-small col-12 lt-sm">
            UNLOCK LIMITLESS <span style="color: #86ECE9;"> <br> POSSIBILITIES</span>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 40px;">
  <div class="text-center text" style="text-align: center;">
    Metarise is fueled by its official cryptocurrency $RIS, extending its utility far beyond transactions, captivating users in a web3 in a new economy of endless possibilities.
  </div>
  <div class="text-center" style="text-align: center; font-size: 20px; font-weight: bold; margin-top: 40px">
    PRIVATE SALE LIVE...
  </div>
  <q-linear-progress query color="primary" class="q-mt-md q-mx-md" style="max-width: 400px;"/>
  <div class="bg" style="padding: 60px; display: flex; justify-content: center; align-items: center; height: 100%; margin-top: 40px;">
    <div style="background: linear-gradient(to right bottom, #28272F, #000000); font-size: 64px; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.3); padding-left: 20px; padding-right: 20px;">
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
<div class="container">
    <div class="marquee marquee1">
    <span style="font-size: 250px; font-weight: 800;">$RIS $RIS</span>
    </div>
    <div class="marquee marquee2">
    <span style="font-size: 250px; font-weight: 800;">$RIS $RIS</span>
    </div>
</div>
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
  z-index: 9999;
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
