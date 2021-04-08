<template>
  <div class=" lg:container lg:mx-auto z-50 border-t">
    <div id="header" class="flex justify-between items-center pl-8 mt-6">
      <h2 class="text-current text-5xl font-bold">Best Deals</h2>
    </div>
    <p v-if="loading">Loading ...</p>
    <div
      v-else
      class="flex flex-col w-full flex-wrap md:flex-row md:justify-around my-16"
    >
      <p v-if="products.length == 0" class="font-semibold text-2xl">
        No content Loaded !
      </p>

      <Card
        v-else
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
        .get("deals")
        .then((response) => {
          products.value = response.data;
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
