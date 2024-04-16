<template>
  <div class="model-detail">
    <!-- {{ model.glbPath }} This can be removed as it seems to be left unintentionally -->
    <model-viewer
      src="/src/assets/models/modelObjects/worldMap.glb"
      alt="A 3D model of an object"
      ar
      auto-rotate
      camera-controls
      camera-orbit="120deg 60deg 20%"
      min-camera-orbit="0deg 60deg 20%"
      max-camera-orbit="360deg 60deg 21%"
      camera-target="0m 1m 0m"
      skybox-image="/src/assets/models/background.png"
      style="width:100%; height:100vh;"
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
    <div class="detail-popup">
      <h3 class="detail-name">ChainLight City</h3>
      <div class="flex" style="background-color: black; opacity: 0.8; padding-top: 10px;">
        <img src="/src/assets/models/world_map.png" alt="A 3D image  of an object" class="detail-image">
        <div class="detail-content">
          <p>10,800 total plats</p>
          <p>5 Points of Interest</p>
          <button class="submit">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  
  
  
</template>


<style scoped>
model-viewer {
  filter: brightness(160%);
}
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
  width: 450px;
  bottom: 100px;
  border-bottom: 5px solid #967BF8;
  padding-top: 10px;
}
.detail-name {
  background-color: black;
  border-top-right-radius: 12px;
  color: #fff;
  font-size: 40px;
  padding-right: 30px;
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
