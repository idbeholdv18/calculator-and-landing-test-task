import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import type { WebpackPluginInstance } from "webpack"
import { T_WebpackConfigPaths } from "./types/webpack-config-paths.type";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(paths.template),
  });

  plugins.push(forkTsCheckerWebpackPlugin);
  plugins.push(htmlWebpackPlugin);
  plugins.push(miniCssExtractPlugin);

  return plugins;
}