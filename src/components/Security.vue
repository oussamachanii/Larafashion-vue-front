<template>
  <form id="form" class="w-full  " @submit.prevent="changeInformation">
    <div class="mb-2">
      <label
        for="CurrentPassword"
        class=" block mb-2 font-semibold text-lg text-current "
        >Current Password</label
      >
      <input
        ref="CurrentPassword"
        type="password"
        name="CurrentPassword"
        v-model="information.current_password"
        :class="errors.current_password ? 'ring-2 ring-red-600' : ''"
        class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
      />
      <label
        v-if="errors.current_password"
        class="text-sm font-semibold text-red-600"
        >{{ errors.current_password[0] }}</label
      >
    </div>
    <div class="mb-2">
      <label
        for="NewPassword"
        class=" block mb-2 font-semibold text-lg text-current "
        >New Password</label
      >
      <input
        ref="NewPassword"
        type="password"
        name="NewPassword"
        v-model="information.password"
        :class="errors.password ? 'ring-2 ring-red-600' : ''"
        class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
      />
      <label
        v-if="errors.password"
        class="text-sm font-semibold text-red-600"
        >{{ errors.password[0] }}</label
      >
    </div>
    <div class="mb-2">
      <label
        for="RePassword"
        class=" block mb-2 font-semibold text-lg text-current "
        >Retype Password</label
      >
      <input
        ref="RePassword"
        type="password"
        name="RePassword"
        v-model="information.password_confirmation"
        :class="errors.password_confirmation ? 'ring-2 ring-red-600' : ''"
        class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
      />
      <label
        v-if="errors.password_confirmation"
        class="text-sm font-semibold text-red-600"
        >{{ errors.password_confirmation[0] }}</label
      >
    </div>

    <div class="w-full flex">
      <button
        :disabled="isLoading"
        type="submit"
        :class="
          isLoading
            ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
            : 'bg-current text-white focus:bg-current-light'
        "
        class="w-full mx-auto py-5  my-10 shadow-lg rounded-lg
                    font-medium text-white uppercase
                    focus:outline-none hover:shadow-none"
      >
        <div v-if="!isLoading">Save</div>
      </button>
    </div>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const isLoading = ref(false);
    const store = useStore();
    const router = useRouter();
    const user = computed(() => store.state.auth.user);
    const api_token = computed(() => store.state.auth.api_token);
    const errors = ref({
      current_password: null,
      password: null,
      password_confirmation: null,
    });
    const information = ref({
      current_password: null,
      password: null,
      password_confirmation: null,
    });
    const config = {
      headers: { Authorization: `Bearer ${api_token.value}` },
    };
    const changeInformation = () => {
      console.log(user.value);
      axios
        .put("password" + user.value.id, information.value, config)
        .then(() => {
          store.commit("setToast", {
            message: "Information successfully changed",
            type: "success",
          });
          store.dispatch("logout");
          router.push({ name: "login" });
        })
        .catch((error) => {
          errors.value = error.response.data.errors;
          store.commit("setToast", {
            message: error.response.data.message,
            type: "error",
          });
        });
    };
    return { isLoading, changeInformation, information, errors };
  },
};
</script>

<style></style>
