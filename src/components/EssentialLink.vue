<script setup>
import { useRouter } from 'vue-router'

// CONSTANTS //

const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
    default: ''
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  }
})

// FUNCTIONS //

function routeToLink() {
  router.push(props.link)
}
</script>
<template>
  <q-item
    clickable
    @click="routeToLink"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon color="white" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label style="color: white;">{{ title }}</q-item-label>
      <q-item-label style="color: white" caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

