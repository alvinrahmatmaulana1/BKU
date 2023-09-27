import { createWebHistory, createRouter } from "vue-router";

import Gambar from '../views/Gambar.vue'; 
import LogoUbk from '../views/LogoUbk.vue';
import VisiMisi from '../views/VisiMisi.vue';
import Struktur from '../views/StrukturOrganisasi.vue'
// import Home from '../views/HomeGambar.vue'

const routes = [ 
  {
    path: "/", 
    name: "Gambar",
    component: Gambar,
  },
  {
    path: "/LogoUbk", 
    name: "Logo",
    component: LogoUbk,
  },
  {
    path: "/VisiMisi", 
    name: "VisiMisi",
    component: VisiMisi,
  },
  {
    path: "/struktur-organisasi", 
    name: "strukturorganisasi",
    component: Struktur,
  },
  // {
  //   path: "/p", 
  //   name: "Home",
  //   component: Home,
  // },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;