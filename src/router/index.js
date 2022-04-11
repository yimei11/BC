import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect:"/jinxuan",
    children:[
      {
        path:"/jinxuan",
        component: () =>import("../components/c/home/xuanran/MyJinxan.vue"),
      },
      {
        path:"/tehui",
        component: () =>import("../components/c/home/xuanran/MyTehui.vue"),
      },
      {
        path:"/meizhuang",
        component: () =>import("../components/c/home/xuanran/MyMeizhua.vue"),
      },
      {
        path:"/muying",
        component: () =>import("../components/c/home/xuanran/MyMuying.vue"),
      },
      {
        path:"/shuma",
        component: () =>import("../components/c/home/xuanran/MyShuma.vue"),
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
