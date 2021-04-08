<template>
  <DeleteConfirmation
    @cancel="cancel"
    @delete="Delete"
    v-if="inDelete"
    message="are you sur that you want to delete this purchase"
    :user="inDeletePurchase"
  ></DeleteConfirmation>
  <header class="flex ">
    <h1 class="text-3xl font-bold text-gray-700 mb-4">
      Purchases
    </h1>
  </header>
  <div class="flex  justify-between  my-6 ">
    <input
      type="text"
      class="flex-grow focus:bg-gray-400 py-3"
      v-model="search"
      @keypress.enter="searchPurchase"
    />
    <button
      @click="searchPurchase"
      class="  w-20 items-center px-4 py-2  ml-4 border border-transparent rounded-md shadow-sm   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current-light"
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
  <div class="mt-4 w-full ">
    <p v-if="loading" class="text-xl font-semibold text-current">Loading...</p>
    <p
      v-if="purchases.data?.length == 0"
      class="text-xl font-semibold text-current text-center"
    >
      no purchases available!
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
        <tr v-for="purchase in purchases.data" :key="purchase.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ purchase.purchaser }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900 underline">
              <router-link
                :to="{ name: 'product', params: { id: purchase.product_id } }"
              >
                {{ purchase.product_id }}
              </router-link>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ purchase.size }}
            </div>
          </td>
          <td class="px-6  py-4 whitespace-nowrap">
            <!-- {{ purchase.color }} -->
            <p
              :style="'background-color:' + purchase.color + ';'"
              class=" border px-2 py-4 mr-2 rounded-full"
            ></p>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ purchase.quantity }}
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ purchase.date }}
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ purchase.price }}
            </div>
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
          >
            <button
              class="my-auto px-3 py-1 border border-transparent rounded-lg shadow-md  bg-red-600 hover:bg-red-700 focus:outline-none "
              @click="Delete(purchase.id)"
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
          :links="purchases?.links"
          :meta="purchases?.meta"
        ></Pagination>
      </template>
    </Table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import Table from "../../components/Table.vue";
import Pagination from "../../components/Pagination.vue";
import DeleteConfirmation from "../../components/DeleteConfirmation.vue";
export default {
  components: { Table, DeleteConfirmation, Pagination },
  setup() {
    const store = useStore();
    const loading = ref(true);
    const search = ref(null);
    const ths = ref([
      "Purchaser",
      "Product_id",
      "Size",
      "Color",
      "Quantity",
      "date",
      "Total Price",
    ]);
    const purchases = ref({ data: [], meta: {}, links: {} });
    const config = {
      headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
      params: { pagination: localStorage.getItem("pagination") },
    };
    const paginate = (url) => {
      getData(url);
    };
    const searchPurchase = () => {
      if (!search.value) {
        return getData();
      }
      return axios
        .get("purchase/", {
          headers: { Authorization: `Bearer ${store.state.auth.api_token}` },
          params: {
            pagination: localStorage.getItem("pagination"),
            search: search.value,
          },
        })
        .then((response) => {
          purchases.value = response.data;
        })
        .catch((error) => {
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        })
        .finally((loading.value = false));
    };
    const getData = (url = "purchase") => {
      loading.value = true;
      axios
        .get(url, config)
        .then((response) => {
          purchases.value = response.data;
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
    onMounted(() => {
      getData();
    });
    const inDelete = ref(false);
    const inDeletePurchase = ref(null);
    const Delete = (id = null) => {
      if (!inDeletePurchase.value || !id) {
        inDelete.value = true;
        inDeletePurchase.value = id;
      } else {
        purchases.value.data = purchases.value.data.filter(
          (purchase) => purchase.id != id
        );
        axios
          .delete("purchase/" + id, config)
          .then(() => {
            store.commit("setToast", {
              message: "purchase Successfully Deleted",
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
      inDeletePurchase.value = null;
    };

    return {
      ths,
      purchases,
      loading,
      paginate,
      search,
      searchPurchase,
      inDelete,
      cancel,
      Delete,
      inDeletePurchase,
    };
  },
};
</script>

<style></style>
