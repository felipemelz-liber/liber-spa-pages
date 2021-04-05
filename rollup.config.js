import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import externals from "rollup-plugin-node-externals";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    json(),
    external({
      react: "react",
      "react-dom": "react-dom",
    }),
    externals(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
  ],
  external: ["react", "react-dom"],
};
