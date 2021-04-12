<template>
  <DeleteConfirmation
    @cancel="cancel"
    @delete="Delete"
    v-if="inDelete"
    message="are you sur that you want to delete this category"
    header="Delete Category"
    :user="inDeleteCategory"
  ></DeleteConfirmation>
  <Modal
    v-if="isModalOpen"
    @close-modal="isModalOpen = !isModalOpen"
    class="fixed top-0 left-0 "
  >
    <template #header>
      <div class=" ml-6 text-xl flex-grow">
        <h2>Add Product</h2>
      </div>
    </template>
    <template #main>
      <div class="mb-2 mr-2">
        <label
          for="Name"
          class=" block mb-2 font-semibold text-lg text-current "
        >
          Category name</label
        >
        <input
          ref="Name"
          v-model="newCategory.title"
          name="Name"
          class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
      </div>
    </template>
    <template #footer>
      <button
        class="w-full inline-flex justify-center  rounded-md border border-transparent shadow-sm px-6 py-2   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        @click="AddCategory"
      >
        <p class="text-lg font-semibold">Add</p>
      </button>
      <button
        @click="isModalOpen = !isModalOpen"
        class="w-full inline-flex justify-center rounded-md border  text-2xl font-semibold shadow-sm px-6 py-2 bg-white  text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      >
        <p class="text-lg font-semibold">Cancel</p>
      </button>
    </template>
  </Modal>
  <header class="flex justify-between mb-4 ">
    <h1 class="text-3xl font-bold text-gray-700 ">
      Categories
    </h1>
    <button
      @click="isModalOpen = !isModalOpen"
      class="w-20 py-2 border border-transparent rounded-md shadow-sm   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current-light"
    >
      <h1 class="font-semibold text-lg">Add</h1>
    </button>
  </header>

  <div class="mt-4 w-full ">
    <!-- <p v-if="loading" class="text-xl font-semibold text-current">Loading...</p> -->
    <p
      v-if="categories.length == 0"
      class="text-xl font-semibold text-current text-center"
    >
      no categories available!
    </p>
    <Table v-else>
      <template #Header>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
          v-for="th in ths"
          :key="th"
        >
          {{ th }}
        </th>
      </template>
      <template #Content>
        <tr v-for="category in categories" :key="category.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ category.title }}
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ category.date }}
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ category.products }}
            </div>
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
          >
            <button
              class="my-auto px-3 py-1 border border-transparent rounded-lg shadow-md  bg-red-600 hover:bg-red-700 focus:outline-none "
              @click="Delete(category.id)"
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
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import Table from "../../components/Table.vue";
import Modal from "../../components/Modal.vue";
import DeleteConfirmation from "../../components/DeleteConfirmation.vue";
export default {
  components: { Modal, Table, DeleteConfirmation },
  setup() {
    const store = useStore();
    const ths = ref(["Title", "Date", "Product Related Count"]);
    const categories = ref([{}]);
    const isModalOpen = ref(false);
    const newCategory = ref({ title: null });
    const config = {
      headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
    };

    const getData = () => {
      axios
        .get("category")
        .then((response) => {
          categories.value = response.data;
        })
        .catch((error) => {
          console.log(error.message.status);
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        });
    };
    onMounted(() => {
      getData();
    });
    const inDelete = ref(false);
    const inDeleteCategory = ref(null);
    const Delete = (id = null) => {
      if (!inDeleteCategory.value || !id) {
        inDelete.value = true;
        inDeleteCategory.value = id;
      } else {
        categories.value = categories.value.filter(
          (category) => category.id != id
        );
        axios
          .delete("category/" + id, config)
          .then(() => {
            store.commit("setToast", {
              message: "category Successfully Deleted",
              type: "success",
            });
            cancel();
          })
          .catch((error) => {
            store.commit("setToast", {
              message: error.message,
              type: "error",
            });
            cancel();
          });
      }
    };
    const cancel = () => {
      inDelete.value = false;
      inDeleteCategory.value = null;
    };

    const AddCategory = () => {
      if (!newCategory.value.title) {
        return store.commit("setToast", {
          message: "Please complete the current fields",
          type: "error",
        });
      }
      // return console.log(newProduct.value);
      axios
        .post("category", { title: newCategory.value.title }, config)
        .then((response) => {
          categories.value.unshift(response.data[0]);
          store.commit("setToast", {
            message: "category successfully created",
            type: "success",
          });
          newCategory.value.title = null;
          isModalOpen.value = false;
        })
        .catch((error) => {
          console.log(error.message.status);
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        });
    };
    return {
      ths,
      categories,
      inDelete,
      cancel,
      Delete,
      inDeleteCategory,
      isModalOpen,
      AddCategory,
      newCategory,
    };
  },
};
</script>

<style></style>
