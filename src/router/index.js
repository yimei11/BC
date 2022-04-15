import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue"
import Shops from "../views/b/shops.vue"

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {

    path: "/login",
    name: "MyLogin",
    component: () => import("../views/c/MyLogin.vue")
  },
  {
    path: "/gw",
    name: "gw",
    component: () => import("../views/c/GouWu.vue"),
  }, 
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/jinxuan",
    children: [{
        path: "/jinxuan",
        component: () => import("../components/c/home/xuanran/MyJinxan.vue"),
      },
      {
        path: "/tehui",
        component: () => import("../components/c/home/xuanran/MyTehui.vue"),
      },
      {
        path: "/meizhuang",
        component: () => import("../components/c/home/xuanran/MyMeizhua.vue"),
      },
      {
        path: "/muying",
        component: () => import("../components/c/home/xuanran/MyMuying.vue"),
      },
      {
        path: "/shuma",
        component: () => import("../components/c/home/xuanran/MyShuma.vue"),
      },
    ]
  },
  {
    path: "/c/classify",
    name: "/c/classify",
    component: () => import('../views/c/classifyView.vue'),
    redirect: "/c/classify/品牌墙",
    children: [{
        path: "/c/classify/品牌墙",
        name: "ppq",
        component: () =>
          import("../components/c/classify/ppq.vue"),
      },
      {
        path: "/c/classify/美容彩妆",
        name: "mrcz",
        component: () =>
          import("../components/c/classify/mrcz.vue"),
      },
      {
        path: "/c/classify/奶粉纸尿裤",
        name: "nf",
        component: () =>
          import("../components/c/classify/nf.vue"),
      },
      {
        path: "/c/classify/母婴专区",
        name: "myzq",
        component: () =>
          import("../components/c/classify/myzq.vue"),
      },
      {
        path: "/c/classify/营养保健",
        name: "yybj",
        component: () =>
          import("../components/c/classify/yybj.vue"),
      },
      {
        path: "/c/classify/数码家电",
        name: "smjd",
        component: () =>
          import("../components/c/classify/smjd.vue"),
      },
      {
        path: "/c/classify/个人护洗",
        name: "grxh",
        component: () =>
          import("../components/c/classify/grhx.vue"),
      },
      {
        path: "/c/classify/奢品",
        name: "sp",
        component: () =>
          import("../components/c/classify/sp.vue"),
      },
      {
        path: "/c/classify/服饰鞋靴",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/fsxx.vue"),
      },
      {
        path: "/c/classify/运动户外",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/ydhw.vue"),
      },
      {
        path: "/c/classify/手表配饰",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/sbps.vue"),
      },
      {
        path: "/c/classify/家居生活",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/jvsh.vue"),
      },
      {
        path: "/c/classify/环球美食",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/hqms.vue"),
      },
      {
        path: "/c/classify/考拉出品",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/klcp.vue"),
      },
      {
        path: "/c/classify/海外直购",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/hwzg.vue"),
      },
      {
        path: "/c/classify/网易严选",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/wyyx.vue"),
      },
      {
        path: "/c/classify/海外商超",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/hwsc.vue"),
      },
      {
        path: "/c/classify/生鲜",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/sx.vue"),
      },
      {
        path: "/c/classify/充值中心",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/czzx.vue"),
      },
      {
        path: "/c/classify/宠物生活",
        name: "fsxx",
        component: () =>
          import("../components/c/classify/cwsh.vue"),
      },
    ]
    
  },
  {
    path: "/shops",
    name: "shops",
    component: Shops,
  }
];

const router = new VueRouter({
  routes,
});

export default router;