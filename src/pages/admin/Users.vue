<template>
  <header class="flex ">
    <h1 class="text-3xl font-bold text-gray-700 mb-4">
      Users
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
        <tr v-for="user in users" :key="user.name">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ user.name }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ user.email }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ user.address }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ user.role == 0 ? "user" : "admin" }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-md font-semibold text-gray-900">
              {{ user.registerDate }}
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
    const ths = ref(["Name", "Email", "Address", "Role", "Register Date"]);
    const users = ref([
      {
        name: "oussama chanii",
        email: "chaniioussama1@gmail.com",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        role: 1,
        registerDate: "12/12/2020 12:22",
      },
      {
        name: "oussama ",
        email: "chaniioussama1@gmail.com",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        role: 1,
        registerDate: "12/12/2020 12:22",
      },
      {
        name: "oussama chaniii",
        email: "chaniioussama1@gmail.com",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        role: 1,
        registerDate: "12/12/2020 12:22",
      },
    ]);

    return { ths, users };
  },
};
</script>

<style></style>
