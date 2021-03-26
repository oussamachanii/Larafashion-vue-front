import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/router";
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
