<template>
  <div
    class=" w-full md:w-96 lg:w-72 relative	border rounded-lg overflow-hidden shadow-lg my-3  md:h-96 "
  >
    <div
      @click="bagClicked"
      class=" p-3 absolute  top-0 right-0   shadow-md  bg-current z-50"
    >
      <svg
        v-if="!inBag"
        class="w-6 h-6 stroke-current text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
      <svg
        v-else
        class="w-6 h-6 stroke-current text-white"
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
    </div>
    <router-link :to="{ name: 'product', params: { id: product?.id } }">
      <div
        class="flex w-full h-full mr-1  rounded-lg overflow-hidden  md:flex-col"
      >
        <div class=" h-40 w-1/3 md:w-full  md:h-full relative">
          <img
            v-if="product?.images?.length > 0"
            :src="product?.images[0].src"
            class="absolute w-full h-full object-cover rounded-t-lg"
            alt="product photo"
          />
          <img
            v-else
            src="../assets/NotFound.jpg"
            class="absolute w-full h-full object-cover rounded-lg"
            alt="product photo"
          />
        </div>
        <div class="flex flex-grow h-40 flex-row md:h-1/4  relative ">
          <div
            class="ml-4 md:flex absolute hidden rounded-xl items-center -top-3 right-2"
          >
            <p
              v-for="color in product?.colors"
              :key="color.id"
              :style="'background-color:' + color.color_Hex + ';'"
              class=" w-5 h-5 border -ml-2 rounded-full"
            ></p>
          </div>
          <div
            class=" flex-grow px-4 items-center my-auto md:px-2 md:h-full md:mt-3  "
          >
            <h1
              class="text-2xl w-56 font-semibold truncate text-gray-900 md:text-xl text-left"
            >
              {{ product?.title }}
            </h1>
            <div
              class="flex md:mt-1 md:justify-between md:items-center md:px-1"
            >
              <div class="flex">
                <svg
                  :class="
                    i <= product?.rating?.stars
                      ? 'text-current-light'
                      : 'text-gray-300'
                  "
                  v-for="i in 5"
                  :key="i"
                  class="w-5 h-5 fill-current text-current-light"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>

                <p class="text-gray-400 ml-1 text-sm ">
                  ({{ product?.rating?.times }})
                </p>
              </div>
              <div class="md:flex items-center hidden">
                <h3 class="text-xl font-semibold md:text-md md:mr-1  ">
                  ${{ product?.price }}
                </h3>
                <h5
                  v-if="product?.discount != 0"
                  class="text-gray-400 line-through md:text-sm"
                >
                  {{ product?.discount }}%
                </h5>
              </div>
            </div>
            <div class="mt-2 md:hidden " id="spesifications">
              <div class="flex flex-col  ">
                <div class="flex ">
                  <h2
                    class=" font-sans font-bold text-current text-sm mr-4  hidden"
                  >
                    Colors :
                  </h2>
                </div>

                <div class="flex items-center justify-between w-full mb-2">
                  <h2
                    class="font-sans font-bold text-current text-sm mr-4 hidden"
                  >
                    For :
                  </h2>
                  <p
                    v-if="product?.sex > 0"
                    class=" font-bold text-gray-600 font-lg "
                  >
                    {{ product?.sex == 1 ? "Male" : "Female" }}
                  </p>
                  <p v-else class=" font-bold text-gray-600 font-lg ">
                    Both
                  </p>
                  <div class="ml-8 flex">
                    <p
                      v-for="color in product?.colors"
                      :key="color.id"
                      :style="'background-color:' + color.color_Hex + ';'"
                      class=" w-5 h-5 border -ml-2 rounded-full"
                    ></p>
                  </div>
                </div>
                <div class="flex items-center">
                  <h2
                    class="font-sans font-bold text-current text-sm mr-4  hidden"
                  >
                    Size :
                  </h2>
                  <div
                    v-if="product?.sizes?.length > 0"
                    class="flex w-full  font-sans font-bold text-gray-600 justify-between rounded-md"
                  >
                    <p
                      v-for="size in product?.sizes"
                      :key="size.id"
                      class="border p-2"
                    >
                      {{ size.title }}
                    </p>
                  </div>
                  <p v-else class="border p-2">no sizes available</p>
                </div>
              </div>
            </div>
          </div>
          <div class=" w-2/5 md:hidden ">
            <div class="h-full flex-col flex justify-end ">
              <div class="my-auto ">
                <h3 class="text-3xl font-bold md:text-md ">
                  ${{ product?.price }}
                </h3>
                <h5
                  v-if="product?.discount != 0"
                  class="text-gray-400 line-through md:text-sm"
                >
                  {{ product?.discount }}%
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
  <!-- <div class="flex">
    <div class="flex-none w-48 relative">
      <img
        src="../assets/Sweater.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-xl font-semibold">
          Classic Utility Jacket
        </h1>
        <div class="text-xl font-semibold text-gray-500">
          $110.00
        </div>
        <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
          In stock
        </div>
      </div>
      <div class="flex items-baseline mt-4 mb-6">
        <div class="space-x-2 flex">
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg"
              name="size"
              type="radio"
              value="xs"
              checked
            />
            XS
          </label>
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="s"
            />
            S
          </label>
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="m"
            />
            M
          </label>
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="l"
            />
            L
          </label>
          <label>
            <input
              class="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="xl"
            />
            XL
          </label>
        </div>
      </div>
      <div class="flex space-x-3 mb-4 text-sm font-medium">
        <div class="flex-auto flex space-x-3">
          <button
            class="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
            type="submit"
          >
            Buy now
          </button>
          <button
            class="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
            type="button"
          >
            Add to bag
          </button>
        </div>
        <button
          class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
          type="button"
          aria-label="like"
        >
          <svg width="20" height="20" fill="currentColor">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
    </form>
  </div> -->
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["product"],
  setup(props) {
    const store = useStore();
    const id = computed(() => props.product?.id);
    const Bag = computed(() => store.getters.getBag);
    const inBag = computed(() => Bag.value.find((item) => item == id.value));

    const bagClicked = () => {
      return store.commit("setBagItem", id.value);
    };
    return { inBag, bagClicked };
  },
};
</script>

<style></style>
