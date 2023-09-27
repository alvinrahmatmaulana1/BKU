<template>
    <div>



        <header
            class="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center bg-blue-800">

            <a href="#"
                class=" items-center whitespace-nowrap text-2xl font-black grid grid-cols-1 md:grid-cols-3 gap-10  p-4">
                <span class="">
                    <img src="https://bku.ac.id/wp-content/uploads/2022/05/header-iso-bku1.png" alt="" />
                </span>
                <!-- <div class="flex items-center -mt-24">
                    <svg class="h-7 w-7 mt-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href="" class="text-sm  text-white dark:text-white hover:underline ">081312221255</a>

                    <a href=""
                        class=" mt-10 text-sm  text-white dark:text-white hover:underline">contact@bku.ac.id</a>
                </div>
                <div class="flex items-center -mt-24 mr-10">
                    <svg class="h-7 w-7 mt-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>

                    <a href="" class="ml-2 text-sm  text-white dark:text-white hover:underline ">081312221255</a>

                    <a href=""
                        class=" mt-10 -ml-24 text-sm  text-white dark:text-white hover:underline">contact@bku.ac.id</a>
                </div> -->
                
            <a class=" inline-flex mr-10 text-white" href="#">
              <!-- <svg class="h-8 w-8 mt-3 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg> -->
              081312221255<br>
              contact@bku.ac.id
            </a>

            <a class="flex mr-10 text-white" href="#">
              <!-- <svg class="h-8 w-8 mt-3 mr-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg> -->
              Jl. Soekarno Hatta No 754 Bandung<br>
             
            </a>
        
            </a>


        </header>




        <header
            class="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
            <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
                <span class="mr-2 w-8">
                    <img src="/" alt="" />
                </span>
            </a>
            <input type="checkbox" class="peer hidden" id="navbar-open" />
            <label class="absolute top-1 right-5 cursor-pointer h-20 lg:hidden" for="navbar-open">
                <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
                

            </label>

            <nav aria-label="Header Navigation"
                class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
                <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                    <li class="lg:mr-12"><router-link to="/"
                            class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                            href="#">Home</router-link></li>
                    <li class="lg:mr-12"><a
                            class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                            href="#"></a></li>
                    <li class="lg:mr-12"><a
                            class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                            href="#">Contact</a></li>
                    <li class="lg:mr-12"><a
                            class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                            href="#">FAQ</a></li>
                </ul>

            </nav>
        </header>

    </div>
</template>