import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";

import Layout from "../pages/Layout";
import Product from "../pages/Product";
import Bag from "../pages/Bag";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Information from "../pages/Information";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import NotFound from "../pages/NotFound";
import Purchases from "../pages/admin/Purchases";
import Products from "../pages/admin/Products";
import ProductDetail from "../pages/admin/ProductDetail";
import Edition from "../pages/admin/Edition";
import Settings from "../pages/Settings";
import store from "../store/index";
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { name: "home", path: "/", component: Home },
      { name: "bag", path: "/bag", component: Bag },
      { name: "search", path: "/search", component: Search, props: true },
      // { name: "about", path: "/about", component: About },
      {
        name: "product",
        path: "/product/:id",
        component: Product,
        props: true,
      },
    ],
  },
  {
    path: "/sign-in",
    name: "login",
    component: Login,
    beforeEnter: (_, __, next) => {
      if (store.state.auth.api_token) return history.back();
      return next();
    },
  },
  {
    path: "/sign-up",
    name: "register",
    component: Register,
    beforeEnter: (_, __, next) => {
      if (store.state.auth.api_token) return history.back();
      return next();
    },
  },
  {
    path: "/complete-information",
    name: "information",
    component: Information,
  },
  {
    path: "/dashboard/",
    component: Dashboard,
    beforeEnter: (_, __, next) => {
      if (store.state.auth.api_token && store.state.user == 1) return next();
      // if (store.state.user == 0) next(from);
      if (store.state.auth.api_token && store.state.user == 0)
        return history.back();
      return next("/sign-in");
      // store.state.user == 1 ? next() : next("/login");
      // console.log("i am in admin page");
    },
    children: [
      { path: "", redirect: "/users" },
      { name: "users", path: "/users", component: Users },
      {
        name: "products",
        path: "/products",
        component: Products,
        // BeforeEnter: () => {
        //   console.log("i am in products page");
        // },
      },
      {
        name: "productDetail",
        path: "/products/detail/:id",
        component: ProductDetail,
        props: true,
      },
      {
        name: "edition",
        path: "/edition/:id",
        component: Edition,
        props: true,
      },
      { name: "purchases", path: "/purchases", component: Purchases },
      // { name: "about", path: "/about", component: About },
      // { name: "product", path: "/product/:id", component: Product },
    ],
  },
  {
    name: "settings",
    path: "/settings",
    component: Settings,
    beforeEnter: (_, __, next) => {
      store.state.auth.api_token ? next() : next("/sign-in");
      // console.log("i am in admin page");
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
