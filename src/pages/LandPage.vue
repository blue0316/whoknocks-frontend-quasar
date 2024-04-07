<template>
  <q-page>
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 50px;">
      <VueZoomable
        style="width: 1080px; height: 1080px; border: 1px solid black"
        selector="#map"
        :minZoom="0.5"
        :maxZoom="10"
      >
      <div id="map" class="map q-ma-md" style="position: relative">
        <div
          style="position: absolute;  width: 34px; height: 25px; top: 25.3px; left: 552.4px; background-color: rgba(128, 128, 128, 0.7); display: flex; flex-wrap: wrap;"
        >
        <div style="display: flex;">
        <div v-for="m in 11" :key="m">
          <div
            v-for="n in 5" :key="n" :id="`lot-1-row-${n}-col-${m}`" style="position: relative; width: 4.2px; height: 4.2px; background-color: rgba(128, 128, 128, 0.7); border: 0.5px solid rgba(0, 0, 0, 0.7);"
            @click="handleClick(1,n,m)"
          >
        </div>
      </div>
        </div>
        </div>

        <!-- <div class="square" v-for="n in 50200" :key="n" :id="'square-' + n" @click="handleClick(n)" :class="{ 'clicked': clickedSquare === n }"></div> -->
      </div>
      </VueZoomable>
   </div>
    <q-dialog
        v-model="openLandDialog"
        persistent
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card
          style="background-color: #2C2C2C;"
        >
          <q-card-section>
            <div>
              Buy this Land: ID - {{ clickedSquare }}
            </div>
          </q-card-section>
          <q-card-section>
            <q-btn
              class="q-mr-sm"
              label="Cancel" 
              color="primary" 
              @click="closeLandDialog" 
            />
            <q-btn 
              label="Buy" 
              color="primary"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import VueZoomable from "vue-zoomable";
import "vue-zoomable/dist/style.css";

const clickedSquare = ref(null);
const openLandDialog = ref(false);

const handleClick = (lot, row, col) => {
  console.log(lot, row, col);
  clickedSquare.value = `lot-${lot}-row-${row}-col-${col}`;
  openLandDialog.value = true;
};

const closeLandDialog = () => {
  openLandDialog.value = false;
  clickedSquare.value = 0;
};
</script>

<style scoped>
.map {
  background-image: url('../assets/test/2DMapTest.png');
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  height: 1080px;
  width: 1080px;  
  margin: 50px;
}

.square {
  width: 5.2px;
  height: 5.2px;
  border: 0.4px solid #000;
}

.clicked {
  background-color: gray;
}
</style>