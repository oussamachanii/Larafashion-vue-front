<template>
  <Modal
    v-if="isModalOpen"
    @close-modal="isModalOpen = !isModalOpen"
    class="fixed top-0 left-0 "
  >
    <template #header>
      <div class=" ml-6 flex-grow">
        <h2 class="font-bold">Add Edition</h2>
      </div>
    </template>
    <template #main>
      <div class="mb-2">
        <label
          for="quantity"
          class=" block mb-2 font-semibold text-lg text-current "
        >
          Quantity</label
        >
        <input
          ref="quantity"
          type="number"
          name="quantity"
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
    <form id="form" class="w-full mt-4 ">
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
            type="text"
            class="text-md  p-2 bg-gray-100  
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
            type="umber"
            name="price"
            class="text-md p-2 bg-gray-100  
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
            class="text-md p-2 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div class="mb-1 col-span-3">
          <label
            for="discription"
            class=" block mb-1 font-semibold text-lg text-current "
          >
            Discription</label
          >
          <textarea
            ref="discription"
            type="text"
            name="discription"
            class="text-md p-2 bg-gray-100  
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
            min="1"
            max="99"
            name="discount"
            class="text-md p-2 bg-gray-100  
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
            class="text-md p-2 bg-gray-100  
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
            class="text-md p-2 bg-gray-100  
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
            class="text-md p-2 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
          />
        </div>
        <div class="mb-1 flex items-end justify-between  ">
          <div class="w-4/5">
            <label
              for="category"
              class=" block mb-1 font-semibold text-lg text-current "
            >
              Category</label
            >
            <select
              ref="category"
              name="category"
              class="text-md p-2 bg-gray-100  
            focus:ring-current  focus:border-current-light w-full shadow-sm
             border rounded-md"
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div class="w-1/5  ml-2">
            <button
              @submit.prevent
              class="p-3 ml-auto w-full rounded-lg bg-current"
            >
              <svg
                class="w-4 h-4 stroke-current text-white mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="py-4 flex ">
        <button
          class="py-3 px-8 border shadow-md  text-lg font-semibold rounded-lg ml-auto text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          save
        </button>
      </div>
    </form>
  </div>
  <div class="my-8  rounded-lg shadow-md border p-4 ">
    <div class=" mt-2 mb-6 flex justify-between">
      <h1 class="text-2xl font-semibold text-gray-700 ">
        Editions
      </h1>
      <button
        @click="isModalOpen = !isModalOpen"
        class="py-3 px-8 border shadow-md  text-lg font-semibold rounded-lg ml-auto text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Add
      </button>
    </div>
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
        <tr v-for="edition in editions" :key="edition.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ edition.size }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ edition.quantity }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md flex font-semibold text-gray-900">
              <span
                class="p-4 rounded-full -ml-2"
                v-for="color in edition.colors"
                :key="color"
                :style="`background-color :${color}; `"
              >
              </span>
            </div>
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap flex justify-end text-right text-sm font-medium"
          >
            <router-link
              :to="{ name: 'edition', params: { id: edition.id } }"
              class="my-auto px-3 py-1 rounded-lg mr-4 shadow-md  border hover:bg-gray-300 focus:outline-none "
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
    const ths = ["Size", "Quantity", "Colors"];
    const editions = ref([
      {
        id: 312209131,
        size: "XL , XLL , XLL",
        quantity: 442,
        colors: ["#B91C1C", "#B45309", "#047857", "#1D4ED8"],
      },
      {
        id: 3121646531,
        size: "XL , XLL , XLL",
        quantity: 442,
        colors: ["#B91C1C", "#B45309", "#047857", "#1D4ED8"],
      },
      {
        id: 311000931,
        size: "XL , XLL , XLL",
        quantity: 442,
        colors: ["#B91C1C", "#B45309", "#047857", "#1D4ED8"],
      },
    ]);
    const isModalOpen = ref(false);
    return { ths, editions, isModalOpen };
  },
};
</script>

<style></style>
