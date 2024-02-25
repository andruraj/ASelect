import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
        exports: "named",
      },
    ],
    plugins: [
      resolve({
        extensions: [".js", ".jsx"],
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        __buildDate__: () => JSON.stringify(new Date()),
      }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      external(),
      terser(),
    ],
  },
];
