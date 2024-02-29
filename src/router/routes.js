import MainLayout from 'src/layouts/MainLayout.vue'
import AvatarPage from 'src/pages/AvatarPage.vue'
import LandPage from 'src/pages/LandPage.vue'
import ErrorNotFound from 'src/pages/ErrorNotFound.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: AvatarPage },
      { path: 'land', component: LandPage }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
