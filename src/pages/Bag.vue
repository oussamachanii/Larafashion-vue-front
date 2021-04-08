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
    <div class="flex items-center my-2 lg:my-0 justify-end ">
      <div
        class="bg-current flex px-4 py-3 border shadow-lg rounded-sm  w-full lg:w-min"
      >
        <h6 class="font-semibold text-2xl text-white">Total</h6>
        <h6 class="text-2xl font-semibold ml-auto lg:ml-4 text-white">
          ${{ totalPrice }}
        </h6>
      </div>
    </div>
    <div v-if="bagIds?.length == 0" class="w-full text-center my-8">
      <p class="text-2xl font-bold text-current ">no product in the bag</p>
    </div>
    <div v-else-if="loading" class="w-full text-center my-8">
      <p class="text-2xl font-bold text-current ">Loading...</p>
    </div>
    <div v-else class="w-full flex flex-wrap justify-around my-8">
      <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
        class=" w-full "
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import { ref, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  props: ["id"],
  components: { Card },
  setup() {
    const store = useStore();
    const quantity = ref(1);
    const bagIds = computed(() => store.getters.getBag);
    const products = ref();
    const totalPrice = computed(() => {
      let total = 0;
      try {
        products.value.forEach((product) => {
          total += parseInt(product.price);
        });
      } catch (error) {
        return 0;
      }
      return total;
    });
    const loading = ref(true);
    const loadProducts = () => {
      axios
        .get("bag", { params: { ids: bagIds.value } })
        .then((response) => {
          products.value = response.data;
          loading.value = false;
        })
        .catch((error) => {
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        });
    };
    onMounted(() => {
      if (bagIds?.value.length != 1) {
        loadProducts();
      }
    });
    watch(
      () => bagIds.value,
      () => {
        products.value = products.value.filter((product) => {
          if (bagIds.value.includes(product.data.id)) return true;
          return false;
        });
      }
    );

    return { quantity, products, totalPrice, bagIds, loading };
  },
};
</script>

<style></style>
