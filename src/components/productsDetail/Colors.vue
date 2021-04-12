<template>
  <div class="my-8  rounded-lg shadow-md border p-4 ">
    <div class=" mt-2 mb-6 flex justify-between">
      <h1 class="text-2xl font-semibold text-gray-700 ">
        Colors
      </h1>
      <button
        @click="isModalOpen = !isModalOpen"
        class="py-3 px-8 border shadow-md  text-lg font-semibold rounded-lg ml-auto text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Add
      </button>
    </div>
    <!-- color modal -->
    <Modal v-if="isModalOpen" @close-modal="cancel" class="fixed top-0 left-0 ">
      <template #header>
        <div class=" ml-6 flex-grow">
          <h2 class="font-bold">Add Color</h2>
        </div>
      </template>
      <template #main>
        <div class="mb-2">
          <label
            for="quantity"
            class=" block mb-2 font-semibold text-lg text-current "
          >
            Color</label
          >
          <div class="w-full flex">
            <span
              class="inline-flex w-8 p-2 h-full text-xl items-center px-3 rounded-l-md border border-r-0 bg-gray-100  text-gray-500 "
            >
              #
            </span>
            <input
              v-model="newColor.color_Hex"
              type="text"
              class="flex-grow text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-r-md"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <button
          class="w-full inline-flex justify-center text-lg font-semibold rounded-md border border-transparent shadow-sm px-6 py-2   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          @click="AddColor"
        >
          Add
        </button>
        <button
          @click="cancel"
          class="w-full inline-flex justify-center rounded-md border  text-lg font-semibold shadow-sm px-6 py-2 bg-white  text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Cancel
        </button>
      </template>
    </Modal>

    <!-- color section -->

    <p
      v-if="colors.length == 0"
      class="font-bold text-2xl text-current text-center my-4"
    >
      No colors available
    </p>
    <div
      v-else
      v-for="color in colors"
      :key="color.id"
      :style="'background-color:' + color.color_Hex + ';'"
      class="w-full bg-red-500 rounded-md h-12 flex my-3   align-end overflow-hidden"
    >
      <button @click="Delete(color.id)" class="ml-auto w-8 h-full mr-2">
        <svg
          class=" w-full h-full  stroke-current text-white"
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
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Modal from "../Modal.vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  components: { Modal },
  props: ["productId"],
  setup(props) {
    const isModalOpen = ref(false);
    const store = useStore();
    const colors = ref([]);
    const product_id = ref(props.productId);
    const newColor = ref({
      color_Hex: null,
      product_id: product_id.value,
    });
    const cancel = () => {
      newColor.value.color_Hex = null;
      isModalOpen.value = false;
    };
    const getData = () => {
      axios
        .get("color/", {
          headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
          params: { productId: product_id.value },
        })
        .then((response) => {
          colors.value = response.data;
        })
        .catch((error) => {
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        });
    };
    onMounted(() => {
      getData();
    });
    const AddColor = () => {
      if (newColor.value.color_Hex) {
        axios
          .post("color", newColor.value, {
            headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
          })
          .then((response) => {
            colors.value.unshift(response.data[0]);
            store.commit("setToast", {
              message: "color successfully created",
              type: "success",
            });

            cancel();
          })
          .catch((error) => {
            cancel();
            console.log(error.message.status);
            store.commit("setToast", {
              message: error.response.data.message,
              type: "error",
            });
          });
      } else {
        store.commit("setToast", {
          message: "color field is empty",
          type: "error",
        });
        cancel();
      }
    };
    const Delete = (id = null) => {
      if (id) {
        axios
          .delete("color/" + id, {
            headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
          })
          .then(() => {
            colors.value = colors.value.filter((color) => {
              return color.id != id;
            });

            store.commit("setToast", {
              message: "Color successfully deleted",
              type: "success",
            });

            cancel();
          })
          .catch((error) => {
            cancel();
            console.log(error.message.status);
            store.commit("setToast", {
              message: error.message,
              type: "error",
            });
          });
      }
    };
    return { isModalOpen, newColor, cancel, AddColor, Delete, colors };
  },
};
</script>

<style></style>
