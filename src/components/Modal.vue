<template>
  <div class="z-40 fixed top-0 left-0 " @keydown.esc="$emit('close-modal')">
    <div class="flex w-screen h-screen bg-black bg-opacity-25 z-40 ">
      <transition name="fade">
        <div
          class=" bg-white m-auto rounded-xl shadow-xl z-50 w-full lg:w-1/3  "
        >
          <div class="border-b-2   shadow-xs border-gray-200">
            <div
              class=" mx-6 py-2 flex text-center items-center text-xl xs:text-4xl font-body font-extrabold text-gray-800"
            >
              <slot class="flex-grow" name="header"></slot>
              <!-- <h2 class="flex-grow">
            Login
          </h2> -->
              <span class=" p-4" @click="$emit('close-modal')">
                <svg
                  class="w-6 h-6 stroke-current text-gray-800 flex-none "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="">
            <div class=" w-11/12 mx-auto my-6 ">
              <slot name="main"></slot>
            </div>
            <div
              class="bg-gray-50 p-4 rounded-lg sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
