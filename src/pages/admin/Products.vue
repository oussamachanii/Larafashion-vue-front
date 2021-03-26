<template>
  <Modal
    v-if="isModalOpen"
    @close-modal="isModalOpen = !isModalOpen"
    class="fixed top-0 left-0 "
  >
    <template #header>
      <div class=" ml-6 flex-grow">
        <h2>Add Product</h2>
      </div>
    </template>
    <template #main>
      <div class="mb-2">
        <label
          for="Name"
          class=" block mb-2 font-semibold text-lg text-current "
        >
          Product Name</label
        >
        <input
          ref="Name"
          type="Name"
          name="Name"
          class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
      </div>
      <div class="mb-2">
        <label
          for="Price"
          class=" block mb-2 font-semibold text-lg text-current "
        >
          Price</label
        >
        <input
          ref="Price"
          type="Price"
          name="Price"
          class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
      </div>
      <div class="mb-2">
        <label
          for="Discription"
          class=" block mb-2 font-semibold text-lg text-current "
        >
          Discription</label
        >
        <textarea
          ref="Discription"
          type="Discription"
          name="Discription"
          class="text-xl font-medium text-body  p-4 bg-gray-100  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
      </div>
    </template>
    <template #footer>
      <button
        class="w-full inline-flex justify-center text-lg font-semibold rounded-md border border-transparent shadow-sm px-6 py-2   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Add
      </button>
      <button
        @click="isModalOpen = !isModalOpen"
        class="w-full inline-flex justify-center rounded-md border  text-lg font-semibold shadow-sm px-6 py-2 bg-white  text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Cancel
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
    <input type="text" class="flex-grow focus:bg-gray-400 py-3" />
    <button
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
  <div class="mt-4">
    <Table>
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
        <tr v-for="product in products" :key="product.name">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.name }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.price }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.quantity }}
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.sex }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.purchases }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900 flex">
              <svg
                v-for="i in product.rating"
                :key="i"
                class="w-5 h-5 fill-current text-current-light"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ product.date }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap ">
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
            class="px-6 py-4 whitespace-nowrap flex justify-between text-right text-sm font-medium"
          >
            <router-link
              :to="{ name: 'productDetail', params: { id: product.id } }"
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
    </Table>
  </div>
</template>

<script>
import { ref } from "vue";
import Table from "../../components/Table.vue";
import Modal from "../../components/Modal.vue";
export default {
  components: { Table, Modal },
  setup() {
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
    const products = ref([
      {
        id: 234234324324324324,
        name: "Lorem, ipsum dolor.",
        price: "2121",
        quantity: "1212221",
        sex: "Men",
        purchases: "12121",
        rating: 3,
        date: "12/12/2020 12:22",
        onDiscount: true,
      },

      {
        id: 32432323424,
        name: "Lorem, ipsum dolor.",
        price: "2121",
        quantity: "1212221",
        sex: "Men",
        purchases: "12121",
        rating: 5,
        date: "12/12/2020 12:22",
        onDiscount: true,
      },
      {
        id: 2421413,
        name: "Lorem, ipsum dolor.",
        price: "2121",
        quantity: "1212221",
        sex: "Men",
        purchases: "12121",
        rating: 1,
        date: "12/12/2020 12:22",
        onDiscount: false,
      },
    ]);
    const isModalOpen = ref(false);

    return { ths, products, isModalOpen };
  },
};
</script>

<style></style>
