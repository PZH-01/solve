import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/loginAndRegister",
    name: "loginAndRegister",
    component: () => import("../views/loginAndRegister.vue"),
  },
  {
    path: "/qAndA",
    name: "qAndA",
    component: () => import("../views/qAndA.vue"),
  },
  {
    path: "/competitionTeam",
    name: "competitionTeam",
    component: () => import("../views/competitionTeam.vue"),
  },
  {
    path: "/findPeople",
    name: "findPeople",
    component: () => import("../views/findPeople.vue"),
  },
  {
    path: "/personalCenter",
    name: "personalCenter",
    component: () => import("../views/personalCenter.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
