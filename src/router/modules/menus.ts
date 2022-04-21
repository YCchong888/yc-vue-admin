import { RouteRecordRaw } from "vue-router";
import LAYOUT from "@/layouts/core/index.vue"
import TAB from "@/layouts/core/Tabmenu/index.vue"
export const menusRouters: Array<RouteRecordRaw> = [
  {
    path: "/menus",
    name: "Menus",
    component: LAYOUT,
    redirect: '/menus/first',
    meta: {
      role: 1,
      icon:"AppstoreOutlined",
      title:"菜单多页"
    },
    children: [
      {
        path: "menusfirst",
        name: "MenusFirst",
        component: (() => import("@/views/menus/menusFirst.vue")),
        meta: {
          role: 1,
          title:"菜单页1"
        },
      },
      {
        path: "menussecond",
        name: "MenusSecond",
        component: (() => import("@/views/menus/menusSecond.vue")),
        meta: {
          role: 1,
          title:"菜单页2"
        },
      },
      {
        path: "menutabpage",
        name: "MenutabPage",
        redirect: '/menus/menutabpage/menustabfirst',
        component: TAB,
        meta: {
          role: 1,
          title:"菜单栏",
          icon:"AppstoreOutlined",
          fixMenu:true,
        },
        children: [
          {
            path: "menustabfirst",
            name: "MenusTabFirst",
            component: (() => import("@/views/menus/menuTab/menuTabOne.vue")),
            meta: {
              role: 1,
              title:"菜单Tab1"
            },
          },
          {
            path: "menustabsecond",
            name: "MenusTabSecond",
            component: (() => import("@/views/menus/menuTab/menuTabSecond.vue")),
            meta: {
              role: 1,
              title:"菜单Tab2"
            },
          },
          {
            path: "menustabdetail",
            name: "MenusTabDetail",
            component: (() => import("@/views/menus/menuTab/menuTabDetail.vue")),
            meta: {
              role: 1,
              title:"菜单Tab详情",
              hideenTab:true
            },
          },
        ]
      },
      {
        path: "detail",
        name: "MenusDetail",
        component: (() => import("@/views/menus/menuDetail.vue")),
        meta: {
          role: 1,
          title:"菜单页详情页",
          hideenMenu: true
        },
      },

    ]
  },
]
export default menusRouters;

