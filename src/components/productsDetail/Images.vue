<template>
  <!-- image modal -->
  <Modal v-if="isModalOpen" @close-modal="cancel" class="fixed top-0 left-0 ">
    <template #header>
      <div class=" ml-6 flex-grow">
        <h2 class="font-bold">Add image</h2>
      </div>
    </template>
    <template #main>
      <div class="mb-2">
        <label
          for="quantity"
          class=" block mb-2 font-semibold text-lg text-current "
        >
          Image File</label
        >
        <div v-if="errors.image" class="border-red-800 bg-red-400 rounded-md">
          <p class="font-semibold py-3 pl-2 text-red-800 text-xl">
            {{ errors?.image[0] }}
          </p>
        </div>
        <p
          v-if="loading"
          class="font-semibold text-center text-current text-2xl"
        >
          {{ loading }}
        </p>
        <input
          v-else-if="!file"
          @change="newImage"
          type="file"
          class="flex-grow text-md font-semibold px-2 py-4 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-r-md"
        />
        <p v-else class="font-semibold text-center text-current text-2xl">
          {{ file.name }}
        </p>
      </div>
    </template>
    <template #footer>
      <button
        @click="upload"
        :disabled="loading"
        :class="
          loading
            ? 'cursor-not-allowed bg-gray-200 '
            : ' bg-current hover:bg-current-light'
        "
        class="w-full inline-flex justify-center text-white text-lg font-semibold rounded-md border border-transparent shadow-sm px-6 py-2    focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Upload
      </button>
      <button
        @click="cancel"
        class="w-full inline-flex justify-center rounded-md border  text-lg font-semibold shadow-sm px-6 py-2 bg-white  text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Cancel
      </button>
    </template>
  </Modal>
  <div class="my-8  rounded-lg shadow-md border p-4 ">
    <div class=" mt-2 mb-6 flex justify-between">
      <h1 class="text-2xl font-semibold text-gray-700 ">
        Images
      </h1>
      <button
        @click="isModalOpen = !isModalOpen"
        class="py-3 px-8 border shadow-md  text-lg font-semibold rounded-lg ml-auto text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Add
      </button>
    </div>
    <!-- images section -->
    <p
      v-if="images.length == 0"
      class="font-bold text-2xl text-current text-center my-4"
    >
      No Images available
    </p>
    <div v-else class="flex flex-wrap ">
      <div
        v-for="image in images"
        :key="image.id"
        class="rounded-md h-52 w-44   mr-3 flex flex-col  flex border  rounded-bold"
      >
        <div class=" relative h-5/6">
          <img
            class="absolute w-full h-full object-cover rounded-t-lg"
            :src="image.src"
            alt="image"
          />
        </div>
        <button
          @click="Delete(image.id)"
          class=" border-l p-4 h-1/6 bg-gray-50 flex items-center w-full justify-around"
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
    const images = ref([]);
    const loading = ref(null);
    const file = ref(null);
    const errors = ref({});
    const product_id = ref(props.productId);
    // return { isModalOpen, newImage, cancel, AddImage, Delete, Images };
    const getData = () => {
      axios
        .get("image/", {
          headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
          params: { productId: product_id.value },
        })
        .then((response) => {
          images.value = response.data;
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
    const cancel = () => {
      if (!loading.value) {
        file.value = null;
        isModalOpen.value = null;
        errors.value = null;
      } else {
        store.commit("setToast", {
          message: "you can't cancel while the image is uploading",
          type: "error",
        });
      }
    };
    const newImage = (e) => {
      file.value = e.target.files[0];
    };
    // const config = {

    // }
    const upload = async () => {
      if (file.value) {
        let data = new FormData();
        data.append("image", file.value);
        axios
          .post("image/" + product_id.value, data, {
            headers: {
              Authorization: `Bearer ${store.state.auth.api_token}`,
            },
          })
          .then((response) => {
            images.value.unshift(response.data[0]);
            store.commit("setToast", {
              message: "Image successfully Added",
              type: "success",
            });
            cancel();
          })
          .catch((error) => {
            errors.value = error.response.data.errors;
            store.commit("setToast", {
              message: error.response.data.message,
              type: "error",
            });
          });
      }

      return cancel();
    };
    const Delete = (id = null) => {
      if (id) {
        axios
          .delete("image/" + id, {
            headers: {
              Authorization: `Bearer ${store.state.auth.api_token}`,
            },
          })
          .then(() => {
            images.value = images.value.filter((image) => image.id != id);

            store.commit("setToast", {
              message: "Image successfully deleted",
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
    return {
      isModalOpen,
      images,
      cancel,
      newImage,
      loading,
      file,
      upload,
      errors,
      Delete,
    };
  },
};
</script>

<style></style>
