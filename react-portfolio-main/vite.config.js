import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This ensures correct routing on Vercel
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
