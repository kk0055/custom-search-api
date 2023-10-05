import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import Results from "../Results.vue";
import Search from "../Search.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name:'search',
      component: Search,
    },
    {
      path: "/search",
      name:'results',
      component: Results,
      props: true
    },
    
  ]
})

export default router

