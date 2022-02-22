import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const About = () => {
  return import(/* webpackChunkName: "about" */ "./views/About.vue");
};
const Users = () => import(/* webpackChunkName: "users" */ "./views/Users.vue");
const Users2 = () => import(/* webpackChunkName: "users2" */ "./views/Users2.vue");
const Users2Detail = () => import(/* webpackChunkName: "users2-detail" */ "./views/Users2Detail.vue");
const Users2Edit = () => import(/* webpackChunkName: "users2-edit" */ "./views/Users2Edit.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
    {
      path: "/users2",
      name: "users2",
      // beforeEnter: (to, from, next) => {
      //   console.log(1);
      //   next('/');
      // },
      component: Users2,
      children: [
        {
          path: ":id",
          name: "users2-detail",
          component: Users2Detail,
        },
        {
          path: ":id/edit",
          name: "users2-edit",
          component: Users2Edit,
        },
      ]
    },
    {
      path: '/redirect-me',
      redirect: { name: 'about' }
    },
    {
      path: '/*',
      redirect: { name: 'home' }
    }
  ],
});
