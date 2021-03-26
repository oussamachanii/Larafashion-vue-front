<template>
  <router-link
    to="/product/99"
    class="flex relative rounded-xl border h-40 my-3 shadow-sm "
  >
    <button
      class="rounded-xl p-2 absolute -top-3 right-0 bg-current-light z-50"
    >
      <svg
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
    </button>

    <div class="w-1/5 relative">
      <img
        src="../assets/Sweater.jpg"
        class="absolute w-full h-full object-cover rounded-lg "
        alt="product photo"
      />
    </div>
    <div class=" h-2/3 w-full   relative">
      <img
        src="../assets/Sweater.jpg"
        class="absolute w-full h-full object-cover rounded-lg md:hidden"
        alt="product photo"
      />
    </div>
    <div class="pl-6 py-2 flex-col  ">
      <h1 class="text-2xl font-bold truncate text-current-dark ">
        Nice Jacket with Necklace
      </h1>
      <div class="flex">
        <svg
          v-for="i in 3"
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
        <svg
          v-for="i in 2"
          :key="i"
          class="w-5 h-5 fill-current text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <span class="text-gray-400 ml-1 text-sm">(30)</span>
      </div>
      <div class="mt-2 " id="spesifications">
        <div class="flex flex-col ">
          <div class="flex items-center">
            <h2 class=" font-sans font-bold text-current text-sm mr-4">
              Colors :
            </h2>
            <span
              v-for="i in 4"
              :key="i"
              class="mr-3 w-4 h-4 bg-red-800 rounded-full"
            ></span>
          </div>
          <div class="flex items-center">
            <h2 class="font-sans font-bold text-current text-sm mr-4">
              Size :
            </h2>
            <span class="font-sans font-semibold text-current"
              >M , S , XL , XXL , XXXL</span
            >
          </div>
          <div class="flex items-center">
            <h2 class="font-sans font-bold text-current text-sm mr-4">
              For :
            </h2>
            <span class="font-sans font-semibold text-current">Female</span>
          </div>
        </div>
      </div>
    </div>
    <div id="price" class="flex flex-col px-3 relative  ">
      <div class="m-auto ml-4">
        <h3 class="text-3xl font-bold ">$200</h3>
        <div class="flex w-full">
          <h5 class="text-gray-400 line-through">$300</h5>
          <span
            class="px-1 ml-2 font-bold font-sans inline-flex text-xs leading-5  rounded-lg bg-green-100 text-green-800"
          >
            -40%
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style></style>
