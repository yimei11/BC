import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/c/HomeView.vue";


Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path:"/login",
    name:"MyLogin",
    component:()=>import("../views/c/MyLogin.vue")
  },
  {
    path:"/gw",
    name:"gw",
    component:()=>import("../views/c/GouWu.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
