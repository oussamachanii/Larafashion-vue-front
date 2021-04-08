<template>
  <form id="form" class="w-full " @submit.prevent="changeInformation">
    <div class="flex justify-between mb-2 mt-2 ">
      <div class="w-1/2 mr-2">
        <label
          for="FirstName"
          class=" block mb-2 font-semibold text-lg text-current "
          >First Name</label
        >
        <input
          ref="FirstName"
          type="FirstName"
          name="FirstName"
          v-model="information.first_name"
          :class="errors.first_name ? 'ring-2 ring-red-600' : ''"
          class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
        <label
          v-if="errors.first_name"
          class="text-sm font-semibold text-red-600"
          >{{ errors.first_name[0] }}</label
        >
      </div>
      <div class="w-1/2 ml-2">
        <label
          for="LastName"
          class=" block mb-2 font-semibold text-lg text-current "
          >Last Name</label
        >
        <input
          ref="LastName"
          type="LastName"
          name="LastName"
          v-model="information.last_name"
          :class="errors.last_name ? 'ring-2 ring-red-600' : ''"
          class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
        <label
          v-if="errors.last_name"
          class="text-sm font-semibold text-red-600"
          >{{ errors.last_name[0] }}</label
        >
      </div>
    </div>
    <div class="mb-2 flex justify-between">
      <div class="mr-2">
        <label
          for="Country"
          class=" block mb-2 font-semibold text-lg text-current "
          >Country</label
        >
        <input
          ref="Country"
          type="Country"
          name="Country"
          v-model="information.country"
          :class="errors.country ? 'ring-2 ring-red-600' : ''"
          class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
        <label
          v-if="errors.country"
          class="text-sm font-semibold text-red-600"
          >{{ errors.country[0] }}</label
        >
      </div>
      <div class="mx-2">
        <label
          for="Region"
          class=" block mb-2 font-semibold text-lg text-current "
          >Region</label
        >
        <input
          ref="Region"
          name="Region"
          v-model="information.region"
          :class="errors.region ? 'ring-2 ring-red-600' : ''"
          class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
        <label
          v-if="errors.region"
          class="text-sm font-semibold text-red-600"
          >{{ errors.region[0] }}</label
        >
      </div>
      <div class="ml-2">
        <label
          for="City"
          class=" block mb-2 font-semibold text-lg text-current "
          >City</label
        >
        <input
          ref="City"
          name="City"
          v-model="information.city"
          :class="errors.city ? 'ring-2 ring-red-600' : ''"
          class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
        />
        <label v-if="errors.city" class="text-sm font-semibold text-red-600">{{
          errors.city[0]
        }}</label>
      </div>
    </div>
    <div class="mb-2">
      <label
        for="Address"
        class=" block mb-2 font-semibold text-lg text-current "
        >Address</label
      >
      <input
        ref="Address"
        name="Address"
        v-model="information.address"
        :class="errors.address ? 'ring-2 ring-red-600' : ''"
        class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
      />
      <label v-if="errors.address" class="text-sm font-semibold text-red-600">{{
        errors.address[0]
      }}</label>
    </div>
    <div class="mb-2">
      <label
        for="PostalCode"
        class=" block mb-2 font-semibold text-lg text-current "
        >Postal Code</label
      >
      <input
        ref="PostalCode"
        v-model="information.code_postal"
        :class="errors.code_postal ? 'ring-2 ring-red-600' : ''"
        name="PostalCode"
        class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
      />
      <label
        v-if="errors.code_postal"
        class="text-sm font-semibold text-red-600"
        >{{ errors.code_code[0] }}</label
      >
    </div>
    <div class="w-full flex">
      <button
        :disabled="isLoading"
        type="submit"
        :class="
          isLoading
            ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
            : 'bg-current text-white hover:bg-current-light'
        "
        class="w-full mx-auto py-5  my-10 shadow-lg rounded-lg
                    font-medium text-white uppercase
                    hover:outline-none hover:shadow-none"
      >
        <div v-if="!isLoading">Save</div>
      </button>
    </div>
  </form>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  setup() {
    const isLoading = ref(false);
    const store = useStore();
    const user = computed(() => store.state.auth.user);
    const api_token = computed(() => store.state.auth.api_token);
    const errors = ref({
      first_name: null,
      last_name: null,
      country: null,
      region: null,
      city: null,
      address: null,
      code_postal: null,
    });
    const information = ref({
      first_name: null,
      last_name: null,
      country: null,
      region: null,
      city: null,
      address: null,
      code_postal: null,
    });
    const changeInformation = () => {
      axios
        .put("user/" + user.value.id, information.value, config)
        .then((response) => {
          information.value = response.data;
          store.commit("setToast", {
            message: "Information successfully changed",
            type: "success",
          });
        })
        .catch((error) => {
          errors.value = error.response.data.errors;
          store.commit("setToast", {
            message: error.response.data.message,
            type: "error",
          });
        });
    };
    const config = {
      headers: { Authorization: `Bearer ${api_token.value}` },
    };
    onMounted(() => {
      axios
        .get("user/" + user.value.id, config)
        .then((response) => {
          information.value = response.data;
        })
        .catch((error) => {
          console.log(error.message.status);
          store.commit("setToast", {
            message: error.message,
            type: "error",
          });
        });
    });
    return { isLoading, errors, information, changeInformation };
  },
};
</script>

<style></style>
