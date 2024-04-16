<template>
  <div v-if="model" class="model-detail">
    
    <!-- Include more details as needed -->
    <img :src="model.imagePath" alt="Model Image" v-if="!showModelViewer">
    <!-- {{ model.glbPath }} This can be removed as it seems to be left unintentionally -->
    <model-viewer
      v-if="showModelViewer"
      :src="model.glbPath"
      alt="A 3D model of an object"
      ar
      auto-rotate
      camera-controls
      style="width:100%; height:100vh; background-color: #2D2D2D;"
    ></model-viewer>
    <div class="mouse-control">
      <div class="flex control-item" style="margin-bottom: 20px;">
        <img src="/src/assets/models/mouse_control_1.png" alt="Mouse Control 1">
        <p>Left Mouse / Rotate</p>
      </div>
      <div class="flex control-item">
        <img src="/src/assets/models/mouse_control_2.png" alt="Mouse Control 2">
        <p>Scroll Wheel / Zoom</p>
      </div>
    </div>
    <!-- <div class="detail-popup">
      <h3 class="detail-name">{{ model.name }}</h3>
      <div class="flex" style="background-color: black; opacity: 0.5; padding-top: 10px;">
        <img :src="model.smallImgPath" alt="A 3D image  of an object" class="detail-image">
        <div class="detail-content">
          <p>{{ model.plat }} total plats</p>
          <p>{{ model.interests }} Points of Interest</p>
          <button class="submit">Buy Now</button>
        </div>
      </div>
    </div> -->
  </div>
  <div v-else>
    <p>Model not found or loading...</p>
  </div>
  
  
</template>

<script setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// Import imagePath for models
import modelsData from '../../mockup/index.json'; // Update the path as necessary

const route = useRoute();
const model = ref(null);
// Add a reactive reference to control visibility of the model viewer
const showModelViewer = ref(false);

async function loadModel(id) {
  const modelData = modelsData.find(m => m.id.toString() === id);

  if (modelData) {
    try {
      // Be aware that dynamic imports return a promise that resolves with the module.
      const imageModule = await import(`${modelData.imagePath}`);
      model.value = {
        ...modelData,
        imagePath: imageModule.default // Assuming imagePath is the default export from the module
      };
      showModelViewer.value = !!modelData.glbPath;
    } catch (error) {
      console.error('Could not load the image module:', error);
      // Handle any errors that occur during import.
    }
  } else {
    model.value = null;
  }
}

// Watch the route params for changes and reload the model accordingly
watch(() => route.params.id, (newId) => {
  loadModel(newId);
});

// Initial load
loadModel(route.params.id);
</script>

<style scoped>
/* Scoped styles for ModelDetail component */
.model-detail {
  color: black;
  /* Additional styles can be added as required */
}
.mouse-control {
  position: fixed;
  z-index: 100;
  right: 100px;
  top:100px;
}
.control-item {
  align-items: center;
  gap: 20px;
}
.control-item p {
  font-size: 20px;
  color: #fff;
}
.detail-popup {
  position: fixed;
  z-index: 100;
  width: 400px;
  bottom: 100px;
  border-bottom: 5px solid #967BF8;
  padding-top: 10px;
}
.detail-name {
  background-color: black;
  border-top-right-radius: 12px;
  color: #fff;
  font-size: 40px;
  padding-right: 10px;
  margin: 0;
  text-align: right;
}
.detail-image {
  max-width: 200px;
  min-height: 150px;
}
.detail-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
}
.detail-content .submit {
  background-color: #967BF8;
  border-radius: 50px;
  font-size: 26px;
  color: #fff;
  cursor: pointer;
  width: 125%;
}
.detail-content p {
  white-space: nowrap;
  font-size: 20px;
  color: #fff;
  width: 90%;
}
p {
  margin: 0;
}
</style>
