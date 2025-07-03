import { T_WebpackConfigPaths } from "./webpack-config-paths.type";

export type T_WebpackConfigProps = {
  mode: "production" | "development";
  paths: T_WebpackConfigPaths,
  port: number,
  isDev: boolean,
};