import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import type { WebpackPluginInstance } from "webpack"
import { T_WebpackConfigPaths } from "./types/webpack-config-paths.type";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";

export const buildPlugins = (paths: T_WebpackConfigPaths): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [];

  const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin({
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
      mode: 'write-references',
    },
  });

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(paths.template),
  });

  plugins.push(forkTsCheckerWebpackPlugin);
  plugins.push(htmlWebpackPlugin);

  return plugins;
}