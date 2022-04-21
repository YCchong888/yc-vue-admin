import { RouteRecordRaw } from "vue-router";
import LAYOUT from "@/layouts/core/index.vue"
const dashboardRouters: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: LAYOUT,
    redirect: '/dashboard',
    meta: {
      role: 1,
      title: "导航页",
      icon: "AppstoreOutlined",
      fixMenu:true
    },
    children: [
      {
        path: "/dashboard",
        name: "DashboardPage",
        component: (() => import("@/views/dashboard/index.vue")),
        meta: {
          role: 1,
          hideenMenu:true
        },
      }
    ]
  },
]

export default dashboardRouters;
