import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("User", {
  state: () => ({ userEmail: "", userPassword: "" }),

  actions: {
    userLogin(userEmail, userPassword) {
      console.log("User Email:", userEmail); // 應該能夠顯示正確的值
      console.log("User Password:", userPassword);
      axios.get("/api/user/info");
    },
  },

  getters: {},
});
