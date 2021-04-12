<template>
  <div class="my-8  rounded-lg shadow-md border p-4 ">
    <div class=" mt-2 mb-6 flex justify-between">
      <h1 class="text-2xl font-semibold text-gray-700 ">
        Sizes
      </h1>
      <button
        @click="isModalOpen = !isModalOpen"
        class="py-3 px-8 border shadow-md  text-lg font-semibold rounded-lg ml-auto text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Add
      </button>
    </div>
    <!-- size modal -->
    <Modal v-if="isModalOpen" @close-modal="cancel" class="fixed top-0 left-0 ">
      <template #header>
        <div class=" ml-6 flex-grow">
          <h2 class="font-bold">Add size</h2>
        </div>
      </template>
      <template #main>
        <div class="mb-2">
          <label
            for="quantity"
            class=" block mb-2 font-semibold text-lg text-current "
          >
            Size name</label
          >
          <input
            v-model="newSize.title"
            type="text"
            class="flex-grow text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-r-md"
          />
        </div>
      </template>
      <template #footer>
        <button
          class="w-full inline-flex justify-center text-lg font-semibold rounded-md border border-transparent shadow-sm px-6 py-2   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          @click="AddSize"
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

    <!-- size section -->

    <p
      v-if="sizes.length == 0"
      class="font-bold text-2xl text-current text-center my-4"
    >
      No sizes available
    </p>
    <div v-else class="flex flex-wrap">
      <div
        v-for="size in sizes"
        :key="size.id"
        class="rounded-md h-12 flex my-3 mr-3  overflow-hidden flex border items-center justify-around rounded-bold"
      >
        <h6 class=" p-4 font-semibold text-2xl text-center">
          {{ size.title }}
        </h6>
        <button
          @click="Delete(size.id)"
          class=" border-l p-4  bg-gray-50 h-full flex items-center"
        >
          <svg
            class=" w-6 h-6 stroke-current text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>
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
    const sizes = ref([]);
    const product_id = ref(props.productId);
    const newSize = ref({
      title: null,
      product_id: product_id.value,
    });
    const cancel = () => {
      newSize.value.title = null;
      isModalOpen.value = false;
    };
    const getData = () => {
      axios
        .get("size/", {
          headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
          params: { productId: product_id.value },
        })
        .then((response) => {
          sizes.value = response.data;
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
    const AddSize = () => {
      if (newSize.value.title) {
        axios
          .post("size", newSize.value, {
            headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
          })
          .then((response) => {
            sizes.value.unshift(response.data[0]);
            store.commit("setToast", {
              message: "size successfully created",
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
          message: "size field is empty",
          type: "error",
        });
        cancel();
      }
    };
    const Delete = (id = null) => {
      if (id) {
        axios
          .delete("size/" + id, {
            headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
          })
          .then(() => {
            sizes.value = sizes.value.filter((size) => {
              return size.id != id;
            });

            store.commit("setToast", {
              message: "size successfully deleted",
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
    return { isModalOpen, newSize, cancel, AddSize, Delete, sizes };
  },
};
</script>

<style></style>
