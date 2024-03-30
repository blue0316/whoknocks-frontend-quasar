<script setup>
</script>
<template>
<div class="background">
    <img class="under-div" src="src/assets/m20_coint.png" alt="coin;">
    <div class="over-div row justify-center align-center">
        <div class="text-center col-12" style="font-size: 50px; line-height: 1; color: white; font-weight: bolder; margin-top: 100px;">
            A <span style="color: #86ECE9;">LIVE</span> <br> CHAPTER FOR
        </div>
        <div class="q-mt-md text-center" style="font-size: 18px; color: white; max-width: 700px;">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
        </div>
        <div class="q-mt-lg row justify-center align-center">
            <q-card
                class="col-3 my-card q-ma-lg hover-effetct"
                square
                style="border-bottom: 5px solid #86ECE9;"
            >
                <q-card-section>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. 
                </q-card-section>
            </q-card>
            <q-card
                class="col-3 my-card q-ma-lg hover-effetct"
                square
                style="border-bottom: 5px solid #86ECE9;"
            >
                <q-card-section>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. 
                </q-card-section>
            </q-card>
            <q-card
                class="col-3 my-card q-ma-lg hover-effetct"
                square
                style="border-bottom: 5px solid #86ECE9;"
            >
                <q-card-section>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. 
                </q-card-section>
            </q-card>
        </div>
        <div class="row justify-center align-center" style="margin-top: 80px;">
            <div>
                <div class="text-center" style="font-size: 50px; line-height: 1; color: white; font-weight: bolder;">
                    OUR <span style="color: #86ECE9;">PARTNERS</span>
                </div>
                <div class="q-mt-md text-center" style="font-size: 18px; color: white; max-width: 700px;">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                </div>
            </div>
            <div class="row justify-center align-center">
                <div>
                    <div class="q-pa-sm" v-for="n in 4" :key="n">
                        <img src="src/assets/partner.png" alt="">
                    </div>
                </div>
                <div>
                    <div class="q-pa-sm" v-for="n in 4" :key="n">
                        <img src="src/assets/partner.png" alt="">
                    </div>
                </div>
            </div>
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
    height: 100vh; /* Adjust as needed */
    width: 100%; /* Adjust as needed */
    position: relative; 
}
.under-div {
  position: absolute;
  top: -50px;
  right: 0px;
  z-index: 0;
}

.over-div {
  position: relative;
  z-index: 1;
}

.hover-effetct {
  transition: all 0.3s ease;
}

.hover-effetct:hover {
  background-color: #967BF8;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.my-card {
    background-color: #2C2C2C;
    color: white;
}
</style>
