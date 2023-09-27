<template>
  <div>
    <swiper :slidesPerView="1" :spaceBetween="30" :modules="modules" :autoplay="{ delay: 5000 }" class="mySwiper">
      <swiper-slide><img
          src="https://bku.ac.id/wp-content/uploads/2022/10/Universitas-Bhakti-Kencana-Dari-Kami-Untuk-Kesehatan-Negeri.png"
          alt=""></swiper-slide>
      <swiper-slide><img src="https://bku.ac.id/wp-content/uploads/2019/07/bku1.png" alt=""></swiper-slide>
      <swiper-slide><img src="https://bku.ac.id/wp-content/uploads/2019/07/bku2.png" alt=""></swiper-slide>
      <swiper-slide><img src="https://bku.ac.id/wp-content/uploads/2021/02/beasiswa-ubk-banner.jpg" alt=""></swiper-slide>

    </swiper>
  </div>
  <HomeGambar />


  <!-- Daftar -->
  <section class="relative z-10 overflow-hidden bg-indigo-600 py-11 mt-5 px-10 ">
    <div class="container">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="w-full px-4 lg:w-1/2">
          <div class="text-center lg:text-left ">
            <div class="mb-10 lg:mb-0 ">
              <p
                class="mt-0 mb-3 text-1xl  leading-tight sm:text-4xl sm:leading-tight md:text-[25px] md:leading-tight text-white ">
                Join Our Bhakti Kencana University</p>

              <p
                class="mt-0 mb-3 text-1xl  leading-tight sm:text-4xl sm:leading-tight md:text-[15px] md:leading-tight text-white ">
                Bhakti Kencana University is a college that is able to give birth to people who have high dedication. with
                the motto Mandiri, Excellent, Competitive and Have Quality of Life, so that they can devote themselves to
                the community</p>

              <p class="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
              </p>
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2">
          <div class="text-center lg:text-right">
            <a href="https://ppmb.bku.ac.id/pendaftaran/">
              <button inline-flex
                class=" inline-flex bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white hover:border-transparent rounded">
                DAFTAR
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </a>
            <br><br>

            <a href="https://www.youtube.com/watch?v=nr8pzsYhrgs">
              <button
                class="inline-flex bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500  py-2 px-4 border border-white hover:border-transparent rounded">
                TENTANG KAMI
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>

              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <span class="absolute top-0 right-0 -z-10">
      <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
          fill="url(#paint0_linear_971_6910)"></path>
        <defs>
          <linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse">
            <stop offset="0.520507" stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg></span><span class="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
          fill="url(#paint0_linear_971_6911)"></path>
        <defs>
          <linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse">
            <stop offset="0.520507" stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg></span><span class="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <!--  -->
      </svg>
    </span>
  </section>

  <LayananBku />
</template>

<script>
// import {Carousel,initTE,} from "tw-elements";
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import HomeGambar from "./HomeGambar.vue";
import LayananBku from "./LayananBku.vue";

export default {

  components: {
    HomeGambar,
    LayananBku,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
      modules: [Autoplay]
    };
  },
}
// initTE({ Carousel });
</script>