import axios from "axios";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.withCredentials = true;
const state = () => ({
  api_token: null,
  loginErrors: { email: null, password: null },
  registerErrors: { email: null, password: null, password_confirmation: null },
  user: null,
  isLoginLoading: false,
  isRegisterLoading: false,
});
const mutations = {
  loadToken(state, payload) {
    state.api_token = payload;
  },
  loadLoginErrors(state, payload) {
    state.loginErrors = payload;
  },
  loadRegisterErrors(state, payload) {
    state.registerErrors = payload;
  },
  resetLoginErrors(state) {
    state.loginErrors = { email: null, password: null };
  },
  resetRegisterErrors(state) {
    state.registerErrors = {
      email: null,
      password: null,
      password_confirmation: null,
    };
  },
  loadUser(state, payload) {
    state.user = payload;
  },
  logOut(state) {
    localStorage.removeItem("api_token");
    state.api_token = null;
    state.user = null;
  },
  toggleLogin(state) {
    state.isLoginLoading = !state.isLoginLoading;
  },
  toggleRegister(state) {
    state.isRegisterLoading = !state.isRegisterLoading;
  },
};
const actions = {
  login({ dispatch, commit }, credentials) {
    commit("resetLoginErrors");
    commit("toggleLogin");
    axios
      .post("login", credentials)
      .then((response) => {
        const data = response.data;
        commit("loadToken", data.api_token);
        localStorage.setItem("api_token", data.api_token);
        history.back();
        dispatch("getUser");
      })
      .catch((error) => {
        commit("loadLoginErrors", error.response.data.errors);
        commit("setToast", {
          message: error.response.data.message,
          type: "error",
        });
      })
      .finally(() => commit("toggleLogin"));
  },
  register({ commit }, credentials) {
    commit("resetRegisterErrors");
    commit("toggleRegister");
    axios
      .post("register", credentials)
      .then((response) => {
        const data = response.data;
        commit("loadToken", data.api_token);
        localStorage.setItem("api_token", data.api_token);
        history.back();
      })
      .catch((error) => {
        commit("loadRegisterErrors", error.response.data.errors);
        commit("setToast", {
          message: error.response.data.message,
          type: "error",
        });
      })
      .finally(() => commit("toggleRegister"));
  },
  getUser({ commit }) {
    axios
      .post(
        "getUserByToken",
        { token: localStorage.getItem("api_token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("api_token")}`,
          },
        }
      )
      .then((response) => {
        const data = response.data;
        commit("loadUser", data.user);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.removeItem("api_token");
          location.reload();
        }
        commit("setToast", {
          message: error.response.data.message,
          type: "error",
        });
      });
  },
};

const getters = {
  getApiToken(state) {
    return state.api_token;
  },
  getLoginErrors(state) {
    return state.loginErrors;
  },
  getRegisterErrors(state) {
    return state.registerErrors;
  },
  getUser(state) {
    return state.user;
  },
  getLoginLoading(state) {
    return state.isLoginLoading;
  },
  getRegisterLoading(state) {
    return state.isRegisterLoading;
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
