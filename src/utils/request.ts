//axios 二次封裝
import axios from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//request 攔截器
request.interceptors.request.use(
  function (config) {
    // 在送出 request 之前可以在這裡攔截處理
    return config;
  },
  function (error) {
    // 如果 request 出現 error
    // 可以在這裡攔截處理
    return Promise.reject(error);
  }
);

//response 攔截器
request.interceptors.response.use(
  function (response) {
    // 回傳的 status code 在 2xx 區間會觸發這個函式
    // 可以在這裡拿到 response 做處理
    return response;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        //可以在這裡針對不同 status code 做處理
        case 401:
          alert("token 無效");
          console.log(error.message);
          break;
        case 404:
          alert("頁面不存在");
          console.log(error.message);
          break;
        case 500:
          alert("程式發生問題");
          console.log(error.message);
          break;
        default:
          alert("程式發生問題");
          console.log(error.message);
      }
    }
    if (!window.navigator.onLine) {
      alert("請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);
export default request;
