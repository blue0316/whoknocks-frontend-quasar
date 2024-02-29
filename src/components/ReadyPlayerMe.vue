<template>
  <div class="flex flex-col items-center justify-center">
    <!-- <q-btn
      outline
      color="primary"
      label="Ready Player Me"
      @click="displayIframe"
    /> -->
    <!-- <p id="avatarUrl">Avatar URL: {{ avatarUrl }}</p> -->

    <iframe id="frame" class="frame" :src="frameSrc" :hidden="isFrameHidden" allow="camera *; microphone *; clipboard-write"></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

let subdomain = 'demo'; // Replace with your custom subdomain
let avatarUrl = ref('');
let isFrameHidden = ref(true);
let frameSrc = ref(`https://${subdomain}.readyplayer.me/avatar?frameApi`);

const subscribe = (event) => {
const json = parse(event);

if (json?.source !== 'readyplayerme') {
  return;
}

// Subscribe to all events sent from Ready Player Me once frame is ready
if (json.eventName === 'v1.frame.ready') {
  document.getElementById('frame').contentWindow.postMessage(
    JSON.stringify({
      target: 'readyplayerme',
      type: 'subscribe',
      eventName: 'v1.**'
    }),
    '*'
  );
}

// Get avatar GLB URL
if (json.eventName === 'v1.avatar.exported') {
  console.log(`Avatar URL: ${json.data.url}`);
  avatarUrl.value = `Avatar URL: ${json.data.url}`;
  isFrameHidden.value = true;
}

// Get user id
if (json.eventName === 'v1.user.set') {
  console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
}
};

const parse = (event) => {
try {
  return JSON.parse(event.data);
} catch (error) {
  return null;
}
};

const displayIframe = () => {
isFrameHidden.value = false;
};

onMounted(() => {
window.addEventListener('message', subscribe);
document.addEventListener('message', subscribe);

displayIframe();
});

onBeforeUnmount(() => {
window.removeEventListener('message', subscribe);
document.removeEventListener('message', subscribe);
});
</script>

<style scoped>
html,
body,
.frame {
  width: 1080px;
  height: 800px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
  padding: 20px;
  font-size: 14px;
  border: none;
}

.warning {
  background-color: #df68a2;
  padding: 3px;
  border-radius: 5px;
  color: white;
}
</style>
