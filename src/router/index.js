import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../components/MainPage.vue')
    },
    {
      path: '/hayvan',
      name: 'hayvan',
      component: import('../components/satinAlma/hayvan.vue')
    },
    {
      path: '/yem',
      name: 'yem',
      component: import('../components/satinAlma/yem.vue')
    },
    {
      path: '/sarfMalzeme',
      name: 'sarfMalzeme',
      component: import('../components/satinAlma/sarfMalzeme.vue')
    },
    {
      path: '/makineTechizat',
      name: 'makineTechizat',
      component: import('../components/satinAlma/makineTechizat.vue')
    },
  ]
})

export default router
