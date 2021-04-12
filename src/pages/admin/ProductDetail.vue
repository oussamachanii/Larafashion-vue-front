<template>
  <header class="mb-4 flex -ml-4 items-center ">
    <router-link :to="{ name: 'products' }" class="text-current-dark">
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
    </router-link>
    <h1 class="text-3xl font-bold text-gray-700 ">
      Product Detail
    </h1>
  </header>
  <div class="my-8 border rounded-lg shadow-md  p-4 ">
    <div class=" mt-2 mb-6">
      <h1 class="text-2xl font-semibold text-gray-700 ">
        Information
      </h1>
    </div>
    <form id="form" class="w-full mt-4" @submit.prevent="update">
      <div id="content" class="grid grid-cols-3 gap-4">
        <div class="mb-1">
          <label
            for="name"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Name</label
          >
          <input
            ref="name"
            name="name"
            v-model="product.title"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          />
        </div>
        <div class="mb-1">
          <label
            for="price"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Price</label
          >
          <input
            ref="price"
            type="number"
            name="price"
            v-model="product.price"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          />
        </div>
        <div class="mb-1">
          <label
            for="sex"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Sex
          </label>
          <select
            ref="sex"
            name="sex"
            v-model="product.sex"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          >
            <option :value="1">Men</option>
            <option :value="2">Women</option>
            <option :value="3">Both</option>
          </select>
        </div>
        <div class="mb-1 col-span-3">
          <label
            for="description"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Description</label
          >
          <textarea
            ref="description"
            type="text"
            name="description"
            v-model="product.description"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          />
        </div>
        <div class="mb-1">
          <label
            for="discount"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Discount %</label
          >
          <input
            ref="discount"
            type="number"
            min="0"
            max="99"
            name="discount"
            v-model="product.discount"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          />
        </div>
        <div class="mb-1">
          <label
            for="discountStart"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Discount Start Date
          </label>
          <input
            ref="discountStart"
            type="date"
            name="discountStart"
            v-model="product.discount_start_date"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          />
        </div>
        <div class="mb-1">
          <label
            for="discountEnd"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Discount End Date
          </label>
          <input
            ref="discountEnd"
            type="date"
            name="discountEnd"
            v-model="product.discount_end_date"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          />
        </div>

        <div class="mb-1">
          <label
            for="shipping"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Shipping
          </label>
          <input
            ref="shipping"
            name="shipping"
            type="number"
            v-model="product.shipping"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          />
        </div>
        <div class="mb-1">
          <label
            for="quantity"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Quantity
          </label>
          <input
            ref="quantity"
            name="quantity"
            type="number"
            v-model="product.quantity"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          />
        </div>
        <div class="mb-1 ">
          <label
            for="sex"
            class=" block mb-2 font-semibold text-lg text-current "
          >
            Category</label
          >
          <select
            ref="category"
            name="category"
            v-model="product.category_id"
            class="text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          >
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
              >{{ category.title }}</option
            >
          </select>
        </div>
      </div>
      <div class="py-4 flex ">
        <button
          type="submit"
          class="py-3 px-8 border shadow-md  text-lg font-semibold rounded-lg ml-auto text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          save
        </button>
      </div>
    </form>
  </div>
  <Colors :productId="id"></Colors>
  <Sizes :productId="id"></Sizes>
  <Images :productId="id"></Images>
</template>

<script>
import Colors from "../../components/productsDetail/Colors.vue";
import Sizes from "../../components/productsDetail/Sizes.vue";
import Images from "../../components/productsDetail/Images.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
export default {
  components: { Colors, Sizes, Images },
  props: ["id"],
  setup() {
    const ths = ["Size", "Quantity", "Colors"];
    const loading = ref(false);
    const route = useRoute();
    const store = useStore();
    const product = ref({});

    const getData = () => {
      loading.value = true;
      axios
        .get("product/" + route.params.id)
        .then((response) => {
          product.value = response.data[0];
          console.log(response.data[0]);
        })
        .catch((error) => {
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        })
        .finally((loading.value = false));
    };
    const categories = ref([{}]);
    const getCategoryData = () => {
      axios
        .get("category")
        .then((response) => {
          categories.value = response.data;
        })
        .catch((error) => {
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        })
        .finally((loading.value = false));
    };
    onMounted(() => {
      getData();
      getCategoryData();
    });
    const config = {
      headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
    };
    const update = () => {
      axios
        .put("product/" + product.value.id, product.value, config)
        .then((response) => {
          product.value = response.value;
          store.commit("setToast", {
            message: "Product Successfully updated",
            type: "success",
          });
        })
        .catch((error) => {
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        });
    };

    return { ths, categories, product, update };
  },
};
</script>

<style></style>
