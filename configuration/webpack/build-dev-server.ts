import { T_WebpackConfigPaths } from "./types/webpack-config-paths.type";

export const buildDevServer = (paths: T_WebpackConfigPaths, port: number): any => {
  return {
    static: {
      directory: paths.publicPath,
    },
    compress: true,
    port: port || 9000,
  }
}