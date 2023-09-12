import { createWebHistory, createRouter } from "vue-router";

import Gambar from '../views/Gambar.vue'; 

const routes = [ 
  {
    path: "/", 
    name: "Gambar",
    component: Gambar,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;