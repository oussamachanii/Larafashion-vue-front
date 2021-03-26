import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      // user: null,
      apiUrl: process.env.VUE_APP_API_URL,
      user: null,
      isToast: false,
      Toast: { message: "", type: "" },
    };
  },
  getters: {
    getUrl(state) {
      return state.apiUrl;
    },
  },
  mutations: {
    setToast(state, payload) {
      // (state.isToast = true),
      //   (state.ToastMessage = payload.message),
      state.isToast = true;
      state.Toast.message = payload.message;
      state.Toast.type = payload.type;
      setTimeout(() => {
        state.isToast = false;
        state.Toast = {};
      }, 5000);
    },
  },
});
export default store;
