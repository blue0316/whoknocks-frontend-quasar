<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>
<template>
    <div 
        class="background row justify-center align-center flex items-center">

    <div class="col-6 offset-6 text-center q-pa-lg gt-sm">
        <div style="font-size: 70px; line-height: 1; color: white">
            A NEW CHAPTER  FOR
            THE HUMAN RACE
        </div>
    
        <div class="q-mt-md" style="font-size: 15px; color: white">
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
        <div
            class="gradient-background" 
            style="font-size: 23px; font-weight: bold;">
            POINTS OF INTERESTS
        </div>
        <div
            style="font-size: 70px; font-weight: bold;" >
            10.800
        </div>
        <div
            class="gradient-background"
            style="font-size: 23px; font-weight: bold;">
            LANDS
        </div> 
    </div>
    <div class="col-12 text-center q-pa-lg lt-md">
        
        <div style="font-size: 70px; line-height: 1; color: white">
            A NEW CHAPTER  FOR
            THE HUMAN RACE
        </div>
    
        <div class="q-mt-md" style="font-size: 15px; color: white">
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
        <div
            class="gradient-background" 
            style="font-size: 23px; font-weight: bold;">
            POINTS OF INTERESTS
        </div>
        <div style="font-size: 70px; font-weight: bold; color: white" >
            10.600
        </div>
        <div
            class="gradient-background" 
            style="font-size: 23px; font-weight: bold;">
            LANDS
        </div> 
    </div>

    <div class="container q-mb-md">
        <div class="marquee marquee1">
            <span style="font-size: 20px; font-weight: bold;">OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON ---</span>
        </div>
        <div class="marquee marquee2">
            <span style="font-size: 20px; font-weight: bold;">OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON --- OPENING SOOON ---</span>
        </div>
    </div>


</div>
</template>
<style scoped>
    /* Set bg to src/assets/backgrounds/Bar_Under_Tower_2_1.png */
    .background {
        background: url('../assets/backgrounds/02_home_bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 100vh; /* Adjust as needed */
        width: 100%; /* Adjust as needed */
    }
    .gradient-background {
        background: linear-gradient(to right, #86ECE9, #967BF8);
    }

.container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 45px;
  background: linear-gradient(to right, rgba(255, 0, 0, 0.47), rgba(0, 99, 255, 0), rgba(255, 0, 0, 0.47));

}

.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  top: 7px
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 20s linear infinite;
}

.marquee1 span {   
  animation-delay: -10s; 
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
