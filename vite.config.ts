import { defineConfig } from "vite";
import { ViteToml } from "vite-plugin-toml";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteToml()],
  server: {
    port: 8008,
  },
});
