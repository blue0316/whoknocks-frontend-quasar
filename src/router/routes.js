import MainLayout from 'src/layouts/MainLayout.vue'
import LandingPage from 'src/pages/LandingPage.vue'
import AvatarPage from 'src/pages/AvatarPage.vue'
import LandPage from 'src/pages/LandPage.vue'
import RegisterPage from 'src/pages/RegisterPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: LandingPage },
      { path: 'land', component: LandPage },
      { path: 'register', component: RegisterPage}
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
