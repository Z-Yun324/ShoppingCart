import { defineStore } from "pinia";
import { reqLogin } from "../api/user";
import { loginForm } from "../model/user";
export const useUserStore = defineStore("User", {
  state: () => ({ userEmail: "", userPassword: "", token: "" }),

  actions: {
    async userLogin(data: loginForm) {
      console.log(data);

      const result = await reqLogin(data);
      console.log(result);

      if (result.status == 200) {
        this.token = this.token;
        console.log(result.data.data.token);
      } else {
      }
    },
  },

  getters: {},
});
