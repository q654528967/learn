import { defineConfig, loadEnv } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  console.log(command);

  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [uni()],
    base: env.VITE_BASE,
    server: {
      port: 3010,
    },
  };
});
