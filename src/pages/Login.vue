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
        Sign In
      </h2>
      <div id="content" class="w-11/12 mx-auto ">
        <form id="form" @submit.prevent="login" class="w-full  ">
          <div class="mb-8">
            <label
              for="email"
              class=" block mb-4 font-bold font-body text-lg text-gray-600 "
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              name="email"
              :class="errors.email ? 'ring-2 ring-red-600' : ''"
              class="text-xl font-medium text-body focus:bg-gray-50 focus:shadow-2xl p-4 bg-gray-200  
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
              v-model="password"
              type="password"
              name="password"
              :class="errors.password ? 'ring-2 ring-red-600' : ''"
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
          <div>
            <router-link
              class="underline mx-auto text-blue-800 font-body font-bold "
              :to="{ name: 'register' }"
              >You don't have an Account ?</router-link
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
                    focus:outline-none hover:shadow-none"
            >
              <div v-if="!isLoading">Login</div>
              <div v-else class="text-white font-semibold">Loading...</div>
              <!-- <div class="flex justify-between py-4">
                <div class="mr-2">Login</div>
                <div></div>
              </div> -->
              <!-- <div v-else class="w-full">
                <half-circle-spinner
                  :animation-duration="1000"
                  :size="29"
                  color="white"
                  class="mx-auto"
                />
              </div> -->
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
    const errors = computed(() => store.getters.getLoginErrors);
    const isLoading = computed(() => store.getters.getLoginLoading);
    const login = () => {
      if (email.value == "" || password.value == "") {
        return store.commit("setToast", {
          message: "fields are not completed",
          type: "error",
        });
      }
      store.dispatch("login", {
        email: email.value,
        password: password.value,
      });
    };
    return { email, password, isLoading, login, errors };
  },
};
</script>

<style></style>
