import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  server: {
    proxy: {
      // "/api": "http://localhost:7501",
      "/api": "https://aluminilinkup-c4541e1462c2.herokuapp.com/",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
