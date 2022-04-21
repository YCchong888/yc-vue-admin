import type { UserInfo } from '#/store';
import type { LoginParams } from '@/api/user/type'
import { defineStore } from "pinia";
import router from "@/router";
import { userApi } from "@/api/user/index";

interface UserState {
  userInfo: UserInfo | null;
  token?: string;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: null,
    token: undefined
  }),
  getters: {
    getUserInfo(): UserInfo | null {
      return this.userInfo;
    },
    getToken(): string {
      return this.token ?? '';
    }
  },
  actions: {
    setToken(token: string) {
      //存储本地
      this.token = token;
    },
    setUserInfo(info: UserInfo) {
      this.userInfo = info;
    },

    //模拟登录请求
    async login(params: LoginParams) {
      try {
        const data = await userApi.loginApi(params)
        this.setUserInfo({
          userName: data.unserName,
          roles: [0,1]
        })
        //路由跳转
        router.push({
          path: '/'
        })
        //本地存储token,调用util
        return null
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})