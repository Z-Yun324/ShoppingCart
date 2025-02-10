import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { viteMockServe } from "vite-plugin-mock";
// https://vite.dev/config/

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: "mock",
        enable: command === "serve", // 僅在開發模式下啟用 mock
      }),
    ],
  };
});
