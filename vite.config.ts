import { defineConfig } from "vitest/config"
import { loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import fixReactVirtualized from "esbuild-plugin-react-virtualized"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react()],
    server: {
      open: true,
      port: Number(env.PORT) || undefined,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "src/setupTests",
      mockReset: true,
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [fixReactVirtualized],
      },
    },
  }
})
