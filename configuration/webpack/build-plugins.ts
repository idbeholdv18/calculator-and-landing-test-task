import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import type { WebpackPluginInstance } from "webpack"

export const buildPlugins = (): WebpackPluginInstance[] => {
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

  plugins.push(forkTsCheckerWebpackPlugin);

  return plugins;
}