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
    caption: 'Buy a piece of land',
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
  <q-header elevated>
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
          flat
          dense
          round
          icon="login"
          aria-label="login"
          @click="loginView.openLogin()"
        />
      </div>
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
  >
    <q-list>
      <q-item-label
        header
      >
        Essential Links
      </q-item-label>

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
