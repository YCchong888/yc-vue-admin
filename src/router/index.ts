import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/login/index.vue";

//全部的路由
const routes: Array<RouteRecordRaw> = [];
const _Routes: Array<RouteRecordRaw> = [];

//一些通用路由
const RootRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];
routes.push(...RootRoutes)
//获取所有相关的路由模块
const modules = import.meta.globEager("./modules/**/*.ts");
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routes.push(...modList)
  _Routes.push(...modList)
})

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export const viewRouters = _Routes;
export default router;
