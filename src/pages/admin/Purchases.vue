<template>
  <header class="flex ">
    <h1 class="text-3xl font-bold text-gray-700 mb-4">
      Purchases
    </h1>
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
        <tr v-for="purchase in purchases" :key="purchase.product_id">
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
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ purchase.color }}
            </div>
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
export default {
  components: { Table },
  setup() {
    const ths = ref([
      "Purchaser",
      "Product_id",
      "Size",
      "Color",
      "Quantity",
      "date",
      "Total Price",
    ]);
    const purchases = ref([
      {
        purchaser: "oussama chanii",
        product_id: "1232312",
        email: "chaniioussama1@gmail.com",
        size: "XL , XLL , XLLL",
        color: "Gray",
        quantity: "12",
        date: "12/12/2020 12:22",
        price: "33",
      },
      {
        purchaser: "oussama chanii",
        product_id: "123231223",
        email: "chaniioussama1@gmail.com",
        size: "XL , XLL , XLLL",
        color: "Gray",
        quantity: "12",
        date: "12/12/2020 12:22",
        price: "33",
      },
      {
        purchaser: "oussama chanii",
        product_id: "12323232312",
        email: "chaniioussama1@gmail.com",
        size: "XL , XLL , XLLL",
        color: "Gray",
        quantity: "12",
        date: "12/12/2020 12:22",
        price: "33",
      },
      {
        purchaser: "oussama chanii",
        product_id: "123223312",
        email: "chaniioussama1@gmail.com",
        size: "XL , XLL , XLLL",
        color: "Gray",
        quantity: "12",
        date: "12/12/2020 12:22",
        price: "33",
      },
      {
        purchaser: "oussama chanii",
        product_id: "1232311112",
        email: "chaniioussama1@gmail.com",
        size: "XL , XLL , XLLL",
        color: "Gray",
        quantity: "12",
        date: "12/12/2020 12:22",
        price: "33",
      },
      {
        purchaser: "oussama chanii",
        product_id: "123232314321412",
        email: "chaniioussama1@gmail.com",
        size: "XL , XLL , XLLL",
        color: "Gray",
        quantity: "12",
        date: "12/12/2020 12:22",
        price: "33",
      },
    ]);

    return { ths, purchases };
  },
};
</script>

<style></style>
