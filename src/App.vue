<template>
  <div class="antialiased text-current ">
    <Toast v-if="isToast"></Toast>
    <router-view></router-view>
  </div>
</template>

<script>
import Toast from "./components/Toast";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "App",
  components: { Toast },
  setup() {
    const store = useStore();
    const isToast = computed(() => store.state.isToast);
    return { isToast };
  },
};
</script>

<style>
input {
  @apply focus:outline-none outline-none;
}
input[type="text"] {
  @apply p-2 bg-gray-200 focus:bg-gray-50 font-semibold text-gray-600 rounded-md focus:ring-current-light focus:border-current-light;
}
input[type="radio"] {
  @apply appearance-none outline-none border-gray-900 focus:ring-0 focus:border-opacity-0 border-current-light border-2 rounded-full cursor-pointer w-5 h-5   bg-white;
}
input[type="radio"]:checked {
  @apply appearance-none focus:outline-none outline-none border-gray-900 ring-transparent ring-0 focus:border-opacity-0 border-2 bg-current;
}
/* ::-webkit-scrollbar {
  @apply bg-gray-300 w-3;
}
::-webkit-scrollbar-track {
  @apply border-current-light rounded-xl;
} */
/* @import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap");
:root {
  font-family: "Oxygen", "serif";
} */
</style>
