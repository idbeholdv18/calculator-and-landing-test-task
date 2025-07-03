import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { T_WebpackConfigProps } from "./types/webpack-config-props.type";
import { buildResolve } from "./build-resolve";
import { buildModule } from "./build-module";
import { buildPlugins } from "./build-plugins";
import { buildDevServer } from "./build-dev-server";

type _PreserveImport = DevServerConfiguration;

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
    devServer: buildDevServer(config.paths, 9000),
  }
}