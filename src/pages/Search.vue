<template>
  <div class="flex pt-8 ">
    <div
      class="w-80 px-3 lg:flex h-screen flex-none flex-col overflow-y-auto border-current border-r-2 mt-4"
      v-if="IsBar"
    >
      <div
        class="flex justify-between border-b-2 pb-3 border-gray-500 items-center"
      >
        <h3 class="text-3xl">Refine</h3>
        <p class="p-2 bg-gray-200 font-semibold text-gray-600 rounded-md">
          Clear
        </p>
      </div>
      <!-- Price -->
      <div
        class="flex justify-between py-4 my-1 items-center "
        @click="Selected.price = !Selected.price"
        :class="Selected.price ? '' : 'border-t border-b  rounded-md px-1'"
      >
        <h3 class="text-2xl font-semibold ">Price</h3>
        <p class=" font-bold text-2xl select-none">
          {{ Selected.price ? "-" : "+" }}
        </p>
      </div>
      <div class="flex items-center justify-between mb-3" v-if="Selected.price">
        <h3 class="text-xl font-semibold text-gray-700">min</h3>
        <input
          type="text"
          class="p-2 bg-gray-200 font-semibold text-gray-600 rounded-md w-16"
        />
        <h3 class="text-xl font-semibold text-gray-700">max</h3>
        <input
          type="text"
          class="p-2 bg-gray-200 font-semibold text-gray-600 rounded-md w-16"
        />
      </div>
      <!-- Rating -->
      <div
        class="flex justify-between py-4 my-1 items-center "
        @click="Selected.rating = !Selected.rating"
        :class="Selected.rating ? '' : 'border-t border-b  rounded-md px-1'"
      >
        <h3 class="text-2xl font-semibold">Rating</h3>
        <p class=" font-bold text-2xl select-none ">
          {{ Selected.rating ? "-" : "+" }}
        </p>
      </div>
      <div
        class="flex items-center justify-between mb-3"
        v-if="Selected.rating"
      >
        <div class="flex flex-col">
          <div class="flex items-center">
            <input
              type="radio"
              name="rating"
              value="5"
              id="rating5"
              class="my-2 mr-4"
            />
            <label for="rating5" class="flex">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-7 h-7 fill-current text-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path></svg
            ></label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="rating"
              value="4"
              id="rating4"
              class="my-2 mr-4"
            />
            <label for="rating4" class="flex">
              <svg
                v-for="i in 4"
                :key="i"
                class="w-7 h-7 fill-current text-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path></svg
            ></label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="rating"
              value="3"
              id="rating3"
              class="my-2 mr-4"
            />
            <label for="rating3" class="flex">
              <svg
                v-for="i in 3"
                :key="i"
                class="w-7 h-7 fill-current text-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path></svg
            ></label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="rating"
              value="2"
              id="rating2"
              class="my-2 mr-4"
            />
            <label for="rating2" class="flex">
              <svg
                v-for="i in 2"
                :key="i"
                class="w-7 h-7 fill-current text-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path></svg
            ></label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="rating"
              value="1"
              id="rating1"
              class="my-2 mr-4"
            />
            <label for="rating1" class="flex">
              <svg
                v-for="i in 1"
                :key="i"
                class="w-7 h-7 fill-current text-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path></svg
            ></label>
          </div>
        </div>
      </div>
      <!-- Categories -->

      <div
        class="flex justify-between py-4 my-1 items-center "
        @click="Selected.category = !Selected.category"
        :class="Selected.category ? '' : 'border-t border-b  rounded-md px-1'"
      >
        <h3 class="text-2xl font-semibold">Category</h3>
        <p class=" font-bold text-2xl select-none ">
          {{ Selected.category ? "-" : "+" }}
        </p>
      </div>
      <div
        class="flex items-center justify-between mb-3"
        v-if="Selected.category"
      >
        <div class="flex flex-col">
          <div
            class="flex items-center"
            v-for="category in Categories"
            :key="category"
          >
            <input
              type="radio"
              name="Categories"
              value="5"
              :id="category"
              class="my-2 mr-4"
            />
            <label :for="category" class="flex">
              <h3 class="text-lg font-semibold text-current">
                {{ category }}
              </h3>
            </label>
          </div>
        </div>
      </div>
      <!-- Size -->
      <div
        class="flex justify-between py-4 my-1 items-center "
        @click="Selected.size = !Selected.size"
        :class="Selected.size ? '' : 'border-t border-b  rounded-md px-1'"
      >
        <h3 class="text-2xl font-semibold">Size</h3>
        <p class=" font-bold text-2xl select-none ">
          {{ Selected.size ? "-" : "+" }}
        </p>
      </div>
      <div class="flex items-center justify-between mb-3" v-if="Selected.size">
        <div class="flex flex-col">
          <div class="flex items-center" v-for="size in Sizes" :key="size">
            <input
              type="radio"
              name="Categories"
              value="5"
              :id="size"
              class="my-2 mr-4"
            />
            <label :for="size" class="flex">
              <h3 class="text-lg font-semibold text-current">
                {{ size }}
              </h3>
            </label>
          </div>
        </div>
      </div>
      <!-- Sex -->
      <div
        class="flex justify-between py-4 my-1 items-center "
        @click="Selected.sex = !Selected.sex"
        :class="Selected.sex ? '' : 'border-t border-b  rounded-md px-1'"
      >
        <h3 class="text-2xl font-semibold">Sex</h3>
        <p class=" font-bold text-2xl select-none ">
          {{ Selected.sex ? "-" : "+" }}
        </p>
      </div>
      <div class="flex items-center justify-between mb-3" v-if="Selected.sex">
        <div class="flex flex-col">
          <div class="flex items-center">
            <input
              type="radio"
              name="Sex"
              value="5"
              id="Men"
              class="my-2 mr-4"
            />
            <label for="Men" class="flex">
              <h3 class="text-lg font-semibold text-current">
                Men
              </h3>
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="Sex"
              value="5"
              id="Women"
              class="my-2 mr-4"
            />
            <label for="Women" class="flex">
              <h3 class="text-lg font-semibold text-current">
                Women
              </h3>
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="Sex"
              value="5"
              id="Both"
              class="my-2 mr-4"
            />
            <label for="Both" class="flex">
              <h3 class="text-lg font-semibold text-current">
                Both
              </h3>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col flex-grow md:container md:mx-auto overflow-x-auto lg:container lg:mx-auto"
    >
      <div
        class="flex font-semibold text-gray-800 text-3xl justify-start my-2 items-center   px-4  "
      >
        <button
          class="p-2.5 rounded-lg shadow-md lg:hidden hover:bg-gray-200 border mr-4 "
          @click="IsBar = !IsBar"
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
        <p class="text-2xl">Search</p>
      </div>
      <div class="flex px-3 justify-between lg:justify-start my-4 ">
        <input type="text" class="w-5/6 focus:bg-gray-400" />
        <button
          class=" w-1/6 bg-current py-4 px-2 ml-3 rounded-xl shadow-lg transform hover:scale-110"
        >
           <svg
        class="w-6 h-6 fill-current text-white mx-auto  "
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        ></path>
      </svg>
        </button>
      </div>
      <div
        class="flex flex-col w-full flex-wrap md:flex-row md:justify-around my-6"
      >
        <Card v-for="i in 98" :key="i"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Card from "../components/Card.vue";
export default {
  components: { Card },
  setup() {
    const Categories = ref(["T-shirts", "Shoes", "Jackets", "Trousers"]);
    const Sizes = ref(["S", "M", "XL", "XLL", "XXL"]);
    const Selected = ref([
      { price: false },
      { rating: false },
      { category: false },
      { size: false },
      { sex: false },
    ]);
    const IsBar = ref(true);
    return { Categories, Sizes, Selected, IsBar };
  },
};
</script>

<style></style>
