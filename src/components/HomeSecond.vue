<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const loaded = ref(false);

onMounted(() => {
  const img = new Image();
  img.src = 'src/assets/backgrounds/02_home_bg.png';
  console.log(img.src);
  img.onload = () => {
    loaded.value = true;
  };
});
</script>
<template>
    <div class="background row justify-center align-center flex items-center" :class="{ loaded: loaded }">
    <div class="col-6 offset-6 text-center q-px-lg gt-sm" style="margin-top: 100px">
        <div class="text-h-desktop-bold">
            A NEW CHAPTER  FOR
            THE HUMAN RACE
        </div>
    
        <div class="q-mt-md text-p-desktop">
            Metarise is an innovative metaverse built on M20Chain blockchain and powered by Unreal Engine. 
            It combines reality and virtual spaces in a captivating environment. 
            The metaverse includes Chainlight City, the first urban center that goes beyond the digital landscape, 
            transforming the web into a dynamic hub for shared experiences, revolutionizing gaming, social interaction and entertainment.
        </div>
        <q-btn
          class="q-mt-md"
          style="border-radius: 120px;"
          color="secondary"
          label="Join Chainlight City"
          @click="router.push('/land')"
          disable
        />
        <div style="font-size: 70px; font-weight: bold; color: white" >
            5
        </div>
        <div>
            <div
              class="gradient-background" 
              style="font-size: 23px; font-weight: bold; display: inline-block; padding-left: 10px; padding-right: 10px">
                POINTS OF INTERESTS
            </div>
        </div>
        <div
            style="font-size: 70px; font-weight: bold;" >
            10.800
        </div>
        <div style="margin-bottom: 50px;">
          <div
              class="gradient-background-reverse" 
              style="font-size: 23px; font-weight: bold; display: inline-block; padding-left: 10px; padding-right: 10px; padding-left: 110px; padding-right: 110px">
                LANDS
            </div>
        </div> 
    </div>
    <div class="col-12 text-center q-px-lg q-pb-lg lt-md" style="margin-top: 100px"> 
        <div class="text-h-mobile-bold">
            A NEW CHAPTER  FOR
            THE HUMAN RACE
        </div>
    
        <div class="q-mt-md text-p-mobile">
            Metarise is an innovative metaverse built on M20Chain blockchain and powered by Unreal Engine. 
            It combines reality and virtual spaces in a captivating environment. 
            The metaverse includes Chainlight City, the first urban center that goes beyond the digital landscape, 
            transforming the web into a dynamic hub for shared experiences, revolutionizing gaming, social interaction and entertainment.
        </div>
        <q-btn
          class="q-mt-md"
          style="border-radius: 120px;"
          color="secondary"
          text-color="white"
          label="Join Chainlight City"
          @click="router.push('/land')" 
          disable
        />
        <div style="font-size: 70px; font-weight: bold; color: white" >
            5
        </div>
        <div>
            <div
              class="gradient-background" 
              style="font-size: 23px; font-weight: bold; display: inline-block; padding-left: 10px; padding-right: 10px">
                POINTS OF INTERESTS
            </div>
        </div>
        <div
            style="font-size: 70px; font-weight: bold;" >
            10.800
        </div>
        <div style="margin-bottom: 50px;">
          <div
              class="gradient-background-reverse" 
              style="font-size: 23px; font-weight: bold; display: inline-block; padding-left: 10px; padding-right: 10px; padding-left: 110px; padding-right: 110px">
                LANDS
            </div>
        </div> 
    </div>

    <div class="container q-mb-md">
        <div class="marquee marquee1" style="padding-top: 8px">
            <span style="font-size: 20px; font-weight: bold;">OPENING SOOON --- OPENING SOOON --- OPENING SOOON</span>
        </div>
        <!-- <div class="marquee marquee2">
            <span style="font-size: 20px; font-weight: bold;">OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON ---</span>
        </div> -->
    </div>


</div>
</template>
<style scoped>
    /* Set bg to src/assets/backgrounds/Bar_Under_Tower_2_1.png */
    .background {
    background-image: url('../assets/backgrounds/02_home_bg_placeholder.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    width: 100%;
    transition: background-image 0.5s ease-in-out;
  }
  .background.loaded {
    background-image: url('../assets/backgrounds/02_home_bg.png');
  }


    .gradient-background {
        background: linear-gradient(to right, #86ECE9, #967BF8);
    }

    .gradient-background-reverse {
        background: linear-gradient(to right, #967BF8, #86ECE9);
    } 

.container {
  position: relative;
  width: 100%;
  height: 45px;
  background: linear-gradient(to right, rgba(255, 0, 0, 0.47), rgba(0, 99, 255, 0), rgba(255, 0, 0, 0.47));
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
