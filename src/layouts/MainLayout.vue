<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import LoginCard from 'src/components/LoginCard.vue'
import { useLoginViewStore } from 'src/stores/login-view'

const loginView = useLoginViewStore()
const leftDrawerOpen = ref(false)

const linksList = [
  {
    title: 'Avatar',
    caption: 'Customize your avatar',
    icon: 'face',
    link: '/'
  },
  {
    title: 'Lands',
    caption: 'Buy a land',
    icon: 'landscape',
    link: '/land'
  }
]

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<template>
<q-layout view="lHh Lpr lFf">
  <q-header 
  style="background-color: #15161f;"
  elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />
      <q-toolbar-title>

      </q-toolbar-title>

      <div>
        <q-btn
          class="q-my-md"
          color="secondary"
          label="Login"
          text-color="black"
          aria-label="login"
          @click="loginView.openLogin()"
        />
      </div>
    </q-toolbar>
  </q-header>

  <q-drawer
    style="background-color: #21222a;"
    v-model="leftDrawerOpen"
    show-if-above
  >
    <q-list 
      class="q-mt-md"
    >
      <EssentialLink
        v-for="link in linksList"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>

  <q-page-container>
    <router-view />
  </q-page-container>
</q-layout>
<LoginCard v-bind="open = loginOpen" />
</template>