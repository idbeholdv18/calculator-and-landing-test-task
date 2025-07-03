import type { ModuleOptions, RuleSetRule } from "webpack"
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildModule = (): ModuleOptions => {
  const rules: RuleSetRule[] = [];

  const ts_loader: RuleSetRule = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  };

  const style_loader: RuleSetRule = {
    test: /\.s?[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            exportLocalsConvention: 'camelCase',
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }

  rules.push(ts_loader);
  rules.push(style_loader);

  return {
    rules
  }
}