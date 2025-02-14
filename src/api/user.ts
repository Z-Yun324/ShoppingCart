import request from "../utils/request";

import type {
  loginForm,
  loginResponseData,
  userInfoReponseData,
} from "../model/user";

//项目用户相关的请求地址

enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}
//登录接口
export const reqLogin = (data: loginForm) =>
  request.post<loginResponseData>(API.LOGIN_URL, data);
//获取用户信息

export const reqUserInfo = () =>
  request.get<userInfoReponseData>(API.USERINFO_URL);

// //退出登录

// export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL);
