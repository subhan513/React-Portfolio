import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-portfolio", // Ensure base path is correct
  build: {
    outDir: "dist",
  },
});