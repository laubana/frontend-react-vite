import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  console.log(command, mode);

  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/",
    define: {
      "process.env": { API_URL: env.API_URL },
    },
    envDir: ".",
    logLevel: "info",
    plugins: [react()],
    preview: {
      port: 4173,
    },
    server: {
      host: true,
      port: 5173,
      proxy: {
        "/api": {
          target: env.API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      strictPort: true,
    },
  };
});
