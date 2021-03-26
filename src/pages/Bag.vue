<template>
  <div class="md:container md:mx-auto">
    <div
      class="flex font-semibold text-gray-800 text-3xl justify-around w-52 my-4  items-end "
    >
      <router-link to="/" class="text-current-dark">Home</router-link>
      <svg
        class="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <p class="text-2xl">Bag</p>
    </div>
    <div class="flex items-center my-2 justify-end">
      <h6 class="font-semibold text-xl text-current">Total :</h6>
      <h6 class="text-2xl font-semibold ml-auto lg:ml-4">$90</h6>
    </div>
    <div
      v-for="i in 7"
      :key="i"
      class="flex flex-col lg:flex-row  relative  justify-between border p-4 my-4 rounded-xl"
    >
      <button class=" lg:p-2 p-4 absolute top-0 right-0 bg-current-light z-50">
        <svg
          class="w-4 h-4 fill-current text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="w-1/5  ">
        <img
          src="../assets/Sweater.jpg"
          class="rounded-xl shadow-lg"
          style="width:100px; heights:100px;"
          alt="Fashion Model"
          draggable="false"
        />
      </div>
      <div
        class=" flex flex-col  flex-grow align-middle mx-auto items-center lg:flex-row "
      >
        <div class="flex items-center flex-col my-4  w-full  lg:flex-row ">
          <h1
            class="text-3xl font-semibold overflow-ellipsis text-gray-900 md:text-xl text-left lg:text-4xl"
          >
            Nice Jacket with Necklace
          </h1>
          <div class="flex lg:my-2  ">
            <svg
              v-for="i in 5"
              :key="i"
              class="w-6 h-6 fill-current text-current-light"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <p class="text-gray-400 ml-1 text-sm ">(30)</p>
          </div>
        </div>
        <div class="flex lg:items-center lg:flex-row mx-auto lg:mx-4 ">
          <h6 class="font-semibold text-xl text-current mb-2 ml-3 lg:mb-0 ">
            Quantity:
          </h6>
          <div class="flex items-center mx-auto lg:mx-0  ">
            <button
              :disabled="quantity >= 10"
              :class="quantity >= 10 ? 'cursor-not-allowed ' : ''"
              @click="quantity <= 9 ? quantity++ : ''"
              class="text-lg lg:text-sm font-semibold ml-auto lg:ml-4 border lg:p-2 p-4 rounded-lg"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              v-model="quantity"
              class="px-4 py-4 lg:px-2 lg:py-1 mx-4 w-24 font-semibold text-xl rounded-xl focus:ring-0 shadow-lg bg-gray-300"
            />
            <button
              :disabled="quantity < 1"
              :class="quantity <= 1 ? 'cursor-not-allowed ' : ''"
              @click="quantity > 1 ? quantity-- : ''"
              class="text-lg font-semibold ml-auto lg:ml-4 border lg:p-2 p-4 rounded-lg"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class=" flex flex-col  w-full lg:w-1/5 mx-auto mt-3 ">
        <h1 class="font-bold text-3xl text-center ">$200</h1>
        <h5 class="text-gray-400 line-through text-center">$300</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["id"],
  setup() {
    const quantity = ref(1);
    return { quantity };
  },
};
</script>

<style></style>
