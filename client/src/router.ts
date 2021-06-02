import { createRouter, createWebHashHistory } from "vue-router";

import { store } from "./store/store";

// 1. Define route components.
// These can be imported from other files
import Layout from "./views/Layout.vue";
import AuthPage from "./views/Pages/AuthPage.vue";
import Login from "./components/Login.vue";
import AdminLogin from "./components/AdminLogin.vue";
import Register from "./components/Register.vue";
import Profile from "./views/Pages/Profile.vue";
import Program from "./views/Pages/Program.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/auth",
    component: AuthPage,
    children: [
      {
        path: "login",
        component: Login,
      },
      {
        path: "admin",
        component: AdminLogin,
      },
      {
        path: "register",
        component: Register,
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "profile",
        component: Profile,
      },
      {
        path: "program",
        component: Program,
      },
    ],
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  console.log("to is here ", to.fullPath.includes("/auth/"));
  let isAuth = store.state.authCustomer.id;
  if (!isAuth && !to.fullPath.includes("/auth/")) next("/auth/login");
  else next();
});
