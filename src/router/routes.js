import MainLayout from '../layouts/MainLayout.vue'
import LandingPage from '../pages/LandingPage.vue'
import AvatarPage from 'src/pages/AvatarPage.vue'
import LandPage from 'src/pages/LandPage.vue'
import RegisterPage from 'src/pages/RegisterPage.vue'
import FqaPage from 'src/pages/FqaPage.vue'
import SupportPage from 'src/pages/SupportPage.vue'

// Import the ModelDetail component
import ModelDetail from 'src/components/ModelView/ModelDetail.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: LandingPage },
      { path: 'model/:id', name: 'ModelDetail', component: ModelDetail, props: true },
      { path: 'land', component: LandPage },
      // { path: 'register', component: RegisterPage },
      // { path: 'avatar', component: AvatarPage },
      // { path: 'fqa', component: FqaPage},
      // { path: 'support', component: SupportPage }
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
