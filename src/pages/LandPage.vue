<template>
  <div class="map q-ma-md">
    <div class="square" v-for="n in 10600" :key="n" :id="'square-' + n" @click="handleClick(n)" :class="{ 'clicked': clickedSquare === n }"></div>
  </div>
  <q-dialog
      v-model="openLandDialog"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-card-section>
          <q-card-title>
            Buy this Land: ID - {{ clickedSquare }}
          </q-card-title>
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
</template>

<script setup>
import { ref } from 'vue';

const clickedSquare = ref(null);
const openLandDialog = ref(false);

const handleClick = (id) => {
  clickedSquare.value = id;
  openLandDialog.value = true;
};

const closeLandDialog = () => {
  openLandDialog.value = false;
  clickedSquare.value = 0;
};
</script>

<style scoped>
.map {
  display: flex;
  flex-wrap: wrap;
}

.square {
  width: 12px;
  height: 12px;
  border: 0.5px solid #000;
}

.clicked {
  background-color: gray;
}
</style>