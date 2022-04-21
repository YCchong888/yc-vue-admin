// childRoutes:[] as Array<RouterItemConfig>,          // 子路由
//     currentChildName: [] as Array<string>,              // 子路由的name
//     routerConfig:[] as Array<RouterItemConfig>,         // 主页面路由的动态配置
import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";

interface UserState {
  childRoutes: Array<RouteRecordRaw>;     // 子路由
  currentChildName: Array<string>,        // 子路由的name
  routerConfig: Array<RouteRecordRaw>     // 主页面路由的动态配置
}

export const useRouterStore = defineStore({
  id: 'router',
  state: (): UserState => ({
    childRoutes: [],
    currentChildName: [],
    routerConfig:[]
  }),
  getters: {
    getChildRoutes (): Array<RouteRecordRaw> | null {
      return this.childRoutes;
    },
    getCurrentChildName (): Array<string> | null {
      return this.currentChildName;
    },
    getRouterConfig (): Array<RouteRecordRaw> | null {
      return this.routerConfig;
    },
  },
  actions: {
    setChildRoutes(routes: Array<RouteRecordRaw>) {
      this.childRoutes = routes;
    },
    setCurrentChildName(routes: Array<string>) {
      this.currentChildName = routes;
    },
    setRouterConfig(routes: Array<RouteRecordRaw>) {
      this.routerConfig = routes;
    },
  }
})