import Vue from "vue";
import Router from "vue-router";

// 首页
const home = resolve => {
  import("../views/home.vue").then(module => {
    resolve(module);
  });
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },

    {
      path: "/home",
      name: "home",
      component: home
    }
  ]
});
