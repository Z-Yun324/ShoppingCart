/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "900px", // 新增更小的斷點
        lg: "1200px", // 新增更大的斷點
      },
    },
  },
  plugins: [require("daisyui")],
};
