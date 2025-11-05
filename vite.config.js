// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/muv/",
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@app", replacement: path.resolve(__dirname, "./src/app") },
      {
        find: "@features",
        replacement: path.resolve(__dirname, "./src/features"),
      },
      { find: "@pages", replacement: path.resolve(__dirname, "./src/pages") },
      { find: "@assets", replacement: path.resolve(__dirname, "./src/assets") },
      { find: "@shared", replacement: path.resolve(__dirname, "./src/shared") },
    ],
  },
});
