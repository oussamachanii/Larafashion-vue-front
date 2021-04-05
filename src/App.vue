<template>
  <div class="antialiased text-current ">
    <transition name="bounce">
      <Toast v-if="isToast" />
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import Toast from "./components/Toast";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
export default {
  name: "App",
  components: { Toast },
  setup() {
    const store = useStore();
    const isToast = computed(() => store.state.isToast);
    onMounted(() => {
      if (localStorage.getItem("api_token")) {
        store.commit("loadToken", localStorage.getItem("api_token"));
        store.dispatch("getUser");
      }
      if (!localStorage.getItem("pagination")) {
        localStorage.setItem("pagination", 50);
      }
      store.commit("loadBag");
      setInterval(() => {
        //load the bag variable to the local storage every 30 sec
        store.commit("loadStorage");
      }, 30000);
    });
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

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s;
}
@keyframes bounce-in {
  0% {
    /* transform: scale(0); */
    transform: translateY(0%);
  }
  50% {
    /* transform: scale(1.15); */
    transform: translateY(50%);
  }
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
