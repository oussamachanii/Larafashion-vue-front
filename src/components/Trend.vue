<template>
  <div class=" lg:container lg:mx-auto z-50 border-t">
    <div id="header" class="flex justify-between items-center pl-8 mt-6">
      <h2 class="text-current text-5xl font-bold">Trend</h2>
      <!-- <select
        name=""
        id=""
        class="border py-4 px-6 rounded-md border-gray-300 md:hidden "
      >
        <option v-for="i in 5" :key="i" value="all" class="h-12 hover:text-4xl"
          >All Categories {{ i }}</option
        >
      </select>
      <nav class="hidden md:flex justify-between mr-4 font-normal">
        <span
          @click="selectedCategory = 0"
          :class="
            selectedCategory == 0
              ? ' font-semibold border-b-4 border-current-light'
              : ''
          "
          class="py-4 border-b capitalize ml-12 select-none cursor-pointer"
          >All Categories</span
        >
        <span
          class="py-4 border-b capitalize ml-12 select-none cursor-pointer"
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="
            selectedCategory == category.id
              ? ' font-semibold border-b-4 border-current-light'
              : ''
          "
          >{{ category.title }}</span
        >
      </nav> -->
    </div>
    <p v-if="loading">Loading ...</p>
    <div
      v-else
      class="flex flex-col w-full flex-wrap md:flex-row md:justify-around my-16"
    >
      <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></Card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: { Card },
  setup() {
    const store = useStore();
    const loading = ref(false);
    const products = ref([{}]);
    onMounted(() => {
      loading.value = true;
      axios
        .get("trend")
        .then((response) => {
          products.value = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        })
        .finally((loading.value = false));
    });
    return { products, loading };
  },
};
</script>

<style></style>
