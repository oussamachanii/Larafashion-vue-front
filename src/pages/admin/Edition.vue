<template>
  <header class="mb-4 flex -ml-4 items-center ">
    <button @click="$router.go(-1)" class="text-current-dark">
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
    </button>
    <h1 class="text-3xl font-bold text-gray-700 ">
      Edition Detail
    </h1>
  </header>
  <div class="my-8 border rounded-lg shadow-md  p-4 ">
    <div class=" mt-2 mb-6">
      <h1 class="text-2xl font-semibold text-gray-700 ">
        Color
      </h1>
    </div>

    <div class="flex  justify-between  my-6 ">
      <span
        class="inline-flex text-xl items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 "
      >
        #
      </span>
      <input type="text" class="flex-grow rounded-none border py-3" />
      <button
        class="  w-20 items-center px-4 py-2 ml-4 border rounded-md shadow-sm   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current-light"
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
    <Table>
      <template #Header>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
        >
          Name
        </th>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
        >
          Color #
        </th>
      </template>
      <template #Content>
        <tr v-for="color in colors" :key="color.name">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ color.name }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              <span
                class="px-16   py-2 rounded-full "
                :style="`background-color :${color.colorHex}; `"
              >
              </span>
            </div>
          </td>

          <td
            class="px-6 py-4 whitespace-nowrap  text-right text-sm font-medium"
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
  <div class="my-8 border rounded-lg shadow-md  p-4 ">
    <div class=" mt-2 mb-6">
      <h1 class="text-2xl font-semibold text-gray-700 ">
        Size
      </h1>
    </div>

    <div class="flex  justify-between  my-6 ">
      <input type="text" class="flex-grow rounded-none border py-3" />
      <button
        class="  w-20 items-center px-4 py-2 ml-4 border rounded-md shadow-sm   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current-light"
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
    <Table>
      <template #Header>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
        >
          size
        </th>
      </template>
      <template #Content>
        <tr v-for="size in sizes" :key="size.name">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ size }}
            </div>
          </td>

          <td
            class="px-6 py-4 whitespace-nowrap  text-right text-sm font-medium"
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
  <!-- <div class="my-8 border rounded-lg shadow-md  p-4 ">
    <div class=" mt-2 mb-6">
      <h1 class="text-2xl font-semibold text-gray-700 ">
        Photos
      </h1>
    </div>

    <div class="flex  justify-between  my-6 ">
      <input type="text" class="flex-grow rounded-none border py-3" />
      <button
        class="  w-20 items-center px-4 py-2 ml-4 border rounded-md shadow-sm   text-white bg-current hover:bg-current-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current-light"
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
    <Table>
      <template #Header>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
        >
          Photo
        </th>
      </template>
      <template #Content>
        <tr v-for="size in sizes" :key="size.name">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ size }}
            </div>
          </td>

          <td
            class="px-6 py-4 whitespace-nowrap  text-right text-sm font-medium"
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
  </div> -->
</template>

<script>
import { ref } from "vue";
import Table from "../../components/Table.vue";
export default {
  components: { Table },
  setup() {
    const colors = ref([
      {
        name: "Gray",
        colorHex: "#374151",
      },
      {
        name: "Red",
        colorHex: "#B91C1C",
      },
    ]);

    const sizes = ref(["XL", "XXL", "XXXL"]);
    return { colors, sizes };
  },
};
</script>

<style></style>
