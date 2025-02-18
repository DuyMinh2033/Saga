import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Đảm bảo base được đặt thành root
  optimizeDeps: {
    include: ["scroll-into-view-if-needed"],
  },
});
