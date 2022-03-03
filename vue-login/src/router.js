import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */ "./views/Login.vue"),
    },
    {
      path: "/user-detail",
      name: "user-detail",
      component: () => import(/* webpackChunkName: "user-detail" */ "./views/UserDetail.vue"),
    },
    {
      path: "user-edit",
      name: "user-edit",
      component: () => import(/* webpackChunkName: "user-edit" */ "./views/UserEdit.vue"),
    },
  ],
});
