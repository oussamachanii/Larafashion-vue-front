<template>
  <nav
    id="nav"
    class=" flex flex-col  border-b shadow-md items-center w-full  py-2 lg:flex-row z-10 "
  >
    <div
      class="flex justify-between w-full px-4 items-center mb-2 z-10 "
      @click="isCard = false"
    >
      <router-link to="/">
        <h1 class=" text-center  ml-8 text-current text-3xl font-bold ">
          LaraFashion.
        </h1>
      </router-link>

      <button
        class="p-2.5 rounded-lg shadow-md hover:bg-gray-200 border lg:hidden"
        @click="isNav = !isNav"
      >
        <svg
          class="w-8 h-8 fill-current text-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      class=" flex h-12 items-center px-4 w-full md:inline-block  justify-between"
      :class="!isNav ? 'hidden' : 'static'"
    >
      <div class="flex justify-around items-center font-semibold  w-full ">
        <router-link to="/" class="w-1/4">Shop</router-link>
        <router-link to="/" class="w-1/4">Women</router-link>
        <router-link to="/" class="w-1/4">Men</router-link>

        <!-- <div class="p-3 cursor-pointer">
        <svg
          class="w-6 h-6 fill-current text-black "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          ></path>
        </svg>
      </div> -->
        <div class="relative inline-block text-left">
          <div>
            <button
              class="inline-flex justify-center w-full rounded-md z-10  shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 border"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
              @click="isCard = !isCard"
            >
              <svg
                class="w-6 h-6 fill-current text-current-dark "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="origin-top-right absolute right-0 mt-2 w-72 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            v-if="isCard"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="block px-8 py-8 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                >Account settings</a
              >
              <a
                href="#"
                class="block px-8 py-8 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                >Support</a
              >
              <a
                href="#"
                class="block px-8 py-8 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                >License</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full mt-6 lg:mt-0 lg:block"
      :class="!isNav ? 'hidden' : 'static'"
    >
      <div
        class=" flex flex-col w-full lg:justify-end lg:flex-row  lg:items-center md:px-8 "
      >
        <button
          class=" py-3 border hover:bg-gray-200  bg-white  text-current shadow-md rounded-lg lg:px-8 lg:mr-4"
        >
          <h4 class="text-center  font-semibold">Sign In</h4>
        </button>
        <button
          class=" py-3  hover:bg-black   bg-current-dark text-white  shadow-md  rounded-lg  lg:px-8  lg:mr-4"
        >
          <h4 class="text-center font-semibold ">Sign Up</h4>
        </button>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <div id="footer" class="h-52 bg-current  text-white  ">
    <div class="flex flex-col h-full  justify-between lg:container lg:mx-auto">
      <div class="flex justify-between p-4">
        <h1 class=" text-center  ml-3  text-2xl">
          LaraFashion.
        </h1>
        <div class="flex w-52 justify-between ">
          <router-link to="/" class="w-1/4">Shop</router-link>
          <router-link to="/" class="w-1/4">Women</router-link>
          <router-link to="/" class="w-1/4">Men</router-link>
        </div>
      </div>
      <div class="flex justify-between p-4 mb-4 items-center">
        <h1 class=" text-center  ml-3  text-sm font-bold ">
          @ 2021 Larashopping . All Rights Reserved
        </h1>
        <a href="#nav" class="text-center text-lg font-bold flex ">
          GO UP TOP
          <svg
            class="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isNav = ref(false);
    const isCard = ref(false);
    return { isNav, isCard };
  },
};
</script>

<style></style>
