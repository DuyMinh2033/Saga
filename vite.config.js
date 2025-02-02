import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Đảm bảo base được đặt thành root
  optimizeDeps: {
    include: ["scroll-into-view-if-needed"],
  },
});
