import { defineConfig } from "rolldown";
import { esmExternalRequirePlugin } from "rolldown/plugins";
export default defineConfig({
  input: "src/main.ts",
  output: {
    format: "esm",
    file: "dist/index.js",
  },
  plugins: [
    esmExternalRequirePlugin({
      external: [
        /^node:/,
        "http",
        "https",
        "fs",
        "path",
        "os",
        "assert",
        "child_process",
        "events",
        "timers",
        "string_decoder",
        "crypto",
        "tls",
        "util",
        "net",
      ],
    }),
  ],
});
