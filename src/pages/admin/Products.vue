<template>
  <DeleteConfirmation
    @cancel="cancel"
    @delete="Delete"
    v-if="inDelete"
    message="are you sur that you want to delete this product"
    header="Delete Product"
    :user="inDeleteProduct"
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
      <div class="flex my-2">
        <div class="mb-2 mr-2 w-1/2">
          <label
            for="Name"
            class=" block mb-2 font-semibold text-lg text-current "
          >
            Product Name</label
          >
          <input
            ref="Name"
            v-model="newProduct.title"
            name="Name"
            class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
          />
        </div>
        <div class="mb-2 ml-2 w-1/2">
          <label
            for="Price"
            class=" block mb-2 font-semibold text-lg text-current "
          >
            Price</label
          >
          <input
            ref="Price"
            v-model="newProduct.price"
            type="number"
            name="Price"
            class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div class="mb-2">
        <label
          for="description"
          class=" block mb-2 font-semibold text-lg text-current "
        >
          description</label
        >
        <textarea
          ref="description"
          v-model="newProduct.description"
          name="description"
          class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
      </div>
      <div class="flex my-2">
        <div class="mb-2 mr-2 w-1/2">
          <label
            for="Name"
            class=" block mb-2 font-semibold text-lg text-current "
          >
            Quantity</label
          >
          <input
            ref="quantity"
            v-model="newProduct.quantity"
            type="number"
            name="quantity"
            min="0"
            max="90"
            class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
          />
        </div>
        <div class="mb-2 ml-2 w-1/2">
          <label
            for="sex"
            class=" block mb-2 font-semibold text-lg text-current "
          >
            Sex</label
          >
          <select
            ref="sex"
            name="sex"
            v-model="newProduct.sex"
            class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
          >
            <option :value="1">Men</option>
            <option :value="2">Women</option>
            <option :value="3">Both</option>
          </select>
        </div>
      </div>
      <div class="mb-2">
        <label
          for="sex"
          class=" block mb-2 font-semibold text-lg text-current "
        >
          Category</label
        >
        <select
          ref="category"
          name="category"
          v-model="newProduct.category_id"
          class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
            >{{ category.title }}</option
          >
        </select>
      </div>
    </template>
    <template #footer>
      <button
        class="w-full inline-flex justify-center  rounded-md border border-transparent shadow-sm px-6 py-2   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        @click="AddProduct"
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
      Products
    </h1>
    <button
      @click="isModalOpen = !isModalOpen"
      class="w-20 py-2 border border-transparent rounded-md shadow-sm   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current-light"
    >
      <h1 class="font-semibold text-lg">Add</h1>
    </button>
  </header>
  <div class="flex  justify-between  my-6 ">
    <input
      type="text"
      v-model="search"
      class="flex-grow focus:bg-gray-400 py-3"
    />
    <button
      class="  w-20 items-center px-4 py-2  ml-4 border border-transparent rounded-md shadow-sm   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current-light"
      @click="searchProduct"
    >
      <svg
        class="w-6 h-6 fill-current text-white mx-auto  "
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
  <div class="mt-4">
    <Table>
      <template #Header>
        <th
          class="px-2 py-3 text-left text-xs font-semibold  text-gray-600 uppercase tracking-wider"
          v-for="th in ths"
          :key="th"
        >
          {{ th }}
        </th>
      </template>
      <template #Content>
        <tr v-for="product in products.data" :key="product.id">
          <td class="px-2 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.name }}
            </div>
          </td>
          <td class="px-2 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.price }}
            </div>
          </td>
          <td class="px-2 py-4  whitespace-nowrap">
            <div class="text-md ml-4 font-semibold text-gray-900">
              {{ product.quantity }}
            </div>
          </td>

          <td class="px-2 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              <h6
                v-if="product.sex > 0"
                class="text-md font-semibold text-gray-900"
              >
                {{ product.sex == 1 ? "Male" : "Female" }}
              </h6>
              <h6 v-else class="text-md font-semibold text-gray-900">
                Both
              </h6>
            </div>
          </td>
          <td class="px-2 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.purchases }}
            </div>
          </td>
          <td class="px-2 py-4  whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900 flex">
              <svg
                v-for="i in 5"
                :key="i"
                :class="
                  product.rating.stars >= i
                    ? 'text-current-light'
                    : 'text-gray-300'
                "
                class="w-4 h-4 fill-current "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <p class="text-gray-400 ml-1 text-sm">
                ({{ product.rating.times ? product.rating.times : 0 }})
              </p>
            </div>
          </td>
          <td class="px-2 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.date }}
            </div>
          </td>
          <td class="px-2 py-4 whitespace-nowrap ">
            <div class="flex">
              <span
                :class="
                  product.onDiscount
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                "
                class="px-4 py-1 text-md leading-5 flex font-semibold rounded-full mx-auto "
              >
                {{ product.onDiscount ? "yes" : "no" }}
              </span>
            </div>
          </td>
          <td
            class="px-2 py-4 whitespace-nowrap flex justify-between text-right text-sm font-medium"
          >
            <router-link
              :to="{
                name: 'productDetail',
                params: { id: product.id },
              }"
              class="my-auto px-3 py-1 rounded-lg shadow-md  border hover:bg-gray-300 focus:outline-none "
            >
              <svg
                class="w-6 h-6 stroke-current text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </router-link>
            <button
              @click="Delete(product.id)"
              class="my-auto px-3 py-1 border border-transparent rounded-lg shadow-md  bg-red-600 hover:bg-red-700 focus:outline-none "
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
      <template #Pagination>
        <Pagination
          @paginate="paginate"
          :links="products.links"
          :meta="products.meta"
        ></Pagination>
      </template>
    </Table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Table from "../../components/Table.vue";
import Modal from "../../components/Modal.vue";
import Pagination from "../../components/Pagination.vue";
import axios from "axios";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";
import DeleteConfirmation from "../../components/DeleteConfirmation.vue";
export default {
  components: { Table, Modal, Pagination, DeleteConfirmation },
  setup() {
    const loading = ref(true);
    const store = useStore();
    // const router = useRouter();
    const ths = ref([
      "Name",
      "Price",
      "Quantity Available",
      "Sex",
      "Purchases",
      "Rating",
      "Date",
      "on discount",
    ]);
    const products = ref({ data: [], meta: {}, links: {} });
    const isModalOpen = ref(false);
    const config = {
      headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
      params: { pagination: localStorage.getItem("pagination") },
    };
    const getData = (url = "product") => {
      loading.value = true;
      axios
        .get(url, config)
        .then((response) => {
          products.value = response.data;
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
    const paginate = (url) => {
      getData(url);
    };
    const search = ref(null);
    const searchProduct = () => {
      if (!search.value) {
        return getData();
      }
      return axios
        .get("product/", {
          headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
          params: {
            pagination: localStorage.getItem("pagination"),
            search: search.value,
          },
        })
        .then((response) => {
          products.value = response.data;
        })
        .catch((error) => {
          console.log(error.message.status);
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        })
        .finally((loading.value = false));
    };
    const newProduct = ref({
      title: null,
      description: null,
      price: null,
      quantity: null,
      sex: null,
      category_id: null,
    });
    const AddProduct = () => {
      if (
        !newProduct.value.title ||
        !newProduct.value.price ||
        !newProduct.value.quantity ||
        !newProduct.value.sex ||
        !newProduct.value.category_id ||
        !newProduct.value.description
      ) {
        return store.commit("setToast", {
          message: "Please complete the current fields",
          type: "error",
        });
      }
      // return console.log(newProduct.value);
      axios
        .post("product", newProduct.value, {
          headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
        })
        .then((response) => {
          products.value.data.unshift(response.data);
          store.commit("setToast", {
            message: "product successfully created",
            type: "success",
          });
          newProduct.value = {
            title: null,
            description: null,
            price: null,
            quantity: null,
            sex: null,
            category_id: null,
          };
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
    const inDelete = ref(false);
    const inDeleteProduct = ref(null);
    const Delete = (id = null) => {
      if (!inDeleteProduct.value || !id) {
        inDelete.value = true;
        inDeleteProduct.value = id;
      } else {
        axios
          .delete("product/" + id, config)
          .then(() => {
            products.value.data = products.value.data.filter(
              (product) => product.id != id
            );
            store.commit("setToast", {
              message: "Product Successfully Deleted",
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
      inDeleteProduct.value = null;
    };
    return {
      ths,
      products,
      categories,
      isModalOpen,
      paginate,
      searchProduct,
      search,
      AddProduct,
      newProduct,
      Delete,
      inDelete,
      inDeleteProduct,
      cancel,
    };
  },
};
</script>

<style></style>
