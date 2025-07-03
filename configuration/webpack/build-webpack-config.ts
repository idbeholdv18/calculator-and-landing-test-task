import type { Configuration } from "webpack";
import { T_WebpackConfigProps } from "./types/webpack-config-props.type";
import { buildResolve } from "./build-resolve";
import { buildModule } from "./build-module";
import { buildPlugins } from "./build-plugins";

export const buildWebpackConfig = (config: T_WebpackConfigProps): Configuration => {
  return {
    mode: config.mode || "production",
    entry: config.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: config.paths.output,
      clean: true,
    },
    resolve: buildResolve(),
    module: buildModule(),
    plugins: buildPlugins(config.paths),
  }
}