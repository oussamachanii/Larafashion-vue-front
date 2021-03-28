<template>
  <!-- <div class="flex w-screen h-screen">
    <div class="w-36 bg-white m-auto rounded-xl shadow-xl  ">
      <h2
        class="my-8 text-center text-5xl xs:text-4xl font-body font-extrabold text-gray-800"
      >
        Login
      </h2>
      <div id="content" class="w-11/12 mx-auto ">
        <div class="flex">
          <div class="block">
            <h3 class="font-bold text-3xl">Email</h3>
            <input type="text" />
          </div>
          <div class="block">
            <h3 class="font-bold text-3xl">Password</h3>
            <input type="password" />
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="flex w-screen h-screen bg-gray-50">
    <div class="w-full lg:w-1/3 border bg-white m-auto rounded-xl shadow-xl  ">
      <h2
        class="my-8 text-center text-5xl xs:text-4xl font-body font-extrabold text-gray-800"
      >
        Sign Up
      </h2>
      <div id="content" class="w-11/12 mx-auto ">
        <form id="form" class="w-full " @submit.prevent="register">
          <div class="mb-4">
            <label
              for="email"
              class=" block mb-4 font-bold font-body text-lg text-gray-600 "
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              :class="errors.email ? 'ring-2 ring-red-600' : ''"
              class=" text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600  focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
            />
            <label
              v-if="errors.email"
              class="text-sm font-semibold text-red-600"
              >{{ errors.email[0] }}</label
            >
          </div>
          <div class="mb-4">
            <label
              for="password"
              class=" block mb-4 font-bold font-body text-lg text-gray-600 "
              >Password</label
            >
            <input
              :class="errors.password ? 'ring-2 ring-red-600' : ''"
              v-model="password"
              type="password"
              name="password"
              class="text-xl text-body  focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600 focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
            />
            <label
              v-if="errors.password"
              class="text-sm font-semibold text-red-600"
              >{{ errors.password[0] }}</label
            >
          </div>
          <div class="mb-4">
            <label
              for="repassword"
              class=" block mb-4 font-bold font-body text-lg text-gray-600 "
              >Re-type Password</label
            >
            <input
              :class="errors.password_confirmation ? 'ring-2 ring-red-600' : ''"
              v-model="repassword"
              type="password"
              name="repassword"
              class="text-xl text-body  focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
            focus:ring-blue-600 focus:border-blue-500 w-full shadow-sm
             border-gray-300 rounded-md"
            />
            <label
              v-if="errors.password_confirmation"
              class="text-sm font-semibold text-red-600"
              >{{ errors.password_confirmation[0] }}</label
            >
          </div>
          <div>
            <router-link
              class="underline mx-auto text-blue-800 font-body font-bold "
              :to="{ name: 'login' }"
              >You Already Have An Account ?</router-link
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
              <div v-if="!isLoading">sign-up</div>
              <div v-else class="text-white font-semibold">Loading...</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const email = ref("");
    const password = ref("");
    const repassword = ref("");
    const error = ref("");
    const errors = computed(() => store.getters.getRegisterErrors);
    const isLoading = computed(() => store.getters.getRegisterLoading);
    const register = () => {
      if (repassword.value != password.value)
        error.value = "password and password confirmation doesn't match";
      if (password.value == "") error.value = "password field required";
      if (repassword.value == "")
        error.value = "password confirmation field required";
      if (email.value == "") error.value = "email field required";
      if (error.value) {
        store.commit("setToast", {
          message: error.value,
          type: "error",
        });
        return (error.value = null);
      }
      store.dispatch("register", {
        email: email.value,
        password: password.value,
        password_confirmation: repassword.value,
      });
    };

    return { email, password, repassword, isLoading, register, error, errors };
  },
};
</script>

<style></style>
