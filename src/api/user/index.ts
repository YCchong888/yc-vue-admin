import { LoginParams } from './type';
import { LoginModel } from './model'
export const userApi =  {
  loginApi(params:LoginParams) {
    console.log(params)
    //返回异步请求
    return {
      unserName:"admin",
      token:"Breare sdad1231"
    } as LoginModel
  },
  loginApi2(params:LoginParams) {
    console.log(params)
    //返回异步请求
    return {
      unserName:"admin",
      token:"Breare sdad1231"
    } as LoginModel
  },
}