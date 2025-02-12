import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { viteMockServe } from "vite-plugin-mock";
// https://vite.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      // 你的 mock 檔案應該放在 `mock` 資料夾內
      enable: true, // 是否啟用 mock
      logger: true, // 是否顯示請求日誌 // 僅在開發模式下啟用 mock
    }),
  ],
});
