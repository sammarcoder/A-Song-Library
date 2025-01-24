

import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'
import index from '@/pages/index.vue'
import login from '@/pages/login.vue'
import songs from '@/pages/songs.vue'
import createSong from '@/pages/createSong.vue'
import CheckComponent from '@/pages/checkComponent.vue'
import ViewSong from '@/pages/viewSong.vue'
import Update from '@/pages/update.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'home',
      component:index
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path: '/songs',
      name:'songs',
      component:songs
    },
    {
      path: '/create',
      name:'create-song',
      component:createSong
    },
    {
      path: '/songs/:songId',
      name: 'song-detail',
      component:ViewSong
    },

    {
      path:'/songs/update/:songId',
      name : 'update',
      component : Update
    },
    {
      path:'/check',
      component:CheckComponent
    }
  ]
})

export default router
