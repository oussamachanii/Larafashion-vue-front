<template>
  <div class="flex h-screen flex-row flex-nowrap">
    <div
      id="sideBar"
      class="w-72  flex h-screen flex-none flex-col overflow-y-auto  shadow-xl border-r-2 border-gray-300 bg-white rounded-t-lg rounded-b-lg"
      v-if="IsBar"
    >
      <div
        id="infos"
        class="bg-local h-16 p-4 flex justify-between items-center shadow-sm border-b-2 border-gray-300"
      >
        <div class="w-32 ml-2 ">
          <svg
            @click="IsBar = !IsBar"
            class="w-6 h-6 mx-auto stroke-current  text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>

        <div
          @click="IsDropOpen = !IsDropOpen"
          class="items-center ml-3 p-2 w-45 flex relative  text-left z-50"
        >
          <h6
            class=" truncate font-semibold text-xl select-none  text-gray-800"
          >
            oussama chanii
          </h6>
          <!-- <p class=" truncate text-lg select-none  text-gray-500">
            chaniioussama1@gmail.com
          </p> -->
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <DropDown :is_home="false" v-show="IsDropOpen"></DropDown>
      <div
        @click="IsDropOpen = false"
        id="navLiks"
        class="flex  w-full relative h-screen px-3 py-1 flex-col mt-2 "
      >
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="{ name: link.to }"
          :class="setNavColor(link.to)"
          class="w-full h-14 flex items-center pl-4"
        >
          <div class="w-5 h-5 ml-2" v-html="link.svg"></div>
          <h3 class="ml-10  truncate select-none   tracking-wide">
            <!-- class=" ml-4 truncate font-normal font-display text-gray-800 text-md" -->
            <!-- class="ml-4 text-gray-800 tracking-wide font-normal font-display text-md" -->
            {{ link.name }}
          </h3>
        </router-link>
      </div>
    </div>
    <div id="content" class="flex-grow px-10 pt-4 overflow-y-auto ">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DropDown from "../../components/DropDown";
// import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  components: { DropDown },
  setup() {
    const route = useRoute();
    const setNavColor = (link) => {
      if (route.name == link) {
        return "font-bold text-white  h-14 bg-gradient-to-l from-current-light to-current rounded-md";
      } else if (route.name == "productDetail" && link == "products") {
        return "font-bold text-white  h-14 bg-gradient-to-l from-current-light to-current rounded-md";
      } else {
        return "h-14  font-semibold text-gray-900";
        // return "font-semibold text-gray-800 text-sm h-14  font-semibold text-gray-900";
      }
    };
    onMounted(() => {
      if (!localStorage.getItem("pagination")) {
        localStorage.setItem("pagination", 100);
      }
    });
    const IsBar = ref(true);
    const IsDropOpen = ref(false);
    const navLinks = ref([
      {
        name: "users",
        to: "users",
        svg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>`,
      },

      {
        name: "products",
        to: "products",
        svg: `
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          `,
      },
      {
        name: "purchases",
        to: "purchases",
        svg: `
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>
          `,
      },
    ]);

    return { setNavColor, navLinks, IsDropOpen, IsBar };
  },
};
</script>

<style>
th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider;
}
</style>
