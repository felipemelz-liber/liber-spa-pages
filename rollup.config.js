import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    json(),
    peerDepsExternal(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
    nodeResolve({extensions: [ '.js', '.jsx' ]}),
    commonjs()
  ],
  external: {
    react: "react",
    "react-dom": "react-dom",
  },
};
