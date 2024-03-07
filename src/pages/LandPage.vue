<template>
  <q-page class="flex flex-center">
    <div class="main q-pa-md">
      <div class="container">
        <div class="hexagon" v-for="n in 100" :key="n" :id="'hexagon-' + n" @click="handleClick(n)"></div>
      </div>
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
            Buy this Land: ID - {{ clickedHexagon }}
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
  </q-page>
</template>
<script setup>
import { ref } from 'vue';
const clickedHexagon = ref(0);
const openLandDialog = ref(false);

const handleClick = (id) => {
  console.log('Hexagon ' + id + ' clicked!');
  clickedHexagon.value = id;
  openLandDialog.value = true;
};

const closeLandDialog = () => {
  openLandDialog.value = false;
  clickedHexagon.value = 0;
};
</script>
<style scoped>
.main {
  display:flex;
  --s: 100px;  /* size  */
  --m: 4px;    /* margin */
  --f: calc(1.732 * var(--s) + 4 * var(--m)  - 1px);
}

.container {
  font-size: 0; /*disable white space between inline block element */
}

.container div {
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s)*1.1547); 
  display: inline-block;
  font-size:initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background: #9C27B0;
  margin-bottom: calc(var(--m) - var(--s)*0.2885); 
}
.container div:nth-child(odd) {
  background: #00e8d9;
}
.container::before {
  content: "";
  width: calc(var(--s)/2 + var(--m));
  float: left;
  height: 120%;
  shape-outside: repeating-linear-gradient(     
                   #0000 0 calc(var(--f) - 3px),      
                   #000  0 var(--f));
}
</style>