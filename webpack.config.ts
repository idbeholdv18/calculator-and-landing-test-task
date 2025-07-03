import type { Configuration } from "webpack";
import path from "path";
import { buildWebpackConfig } from "./configuration/webpack/build-webpack-config";

type T_WebpackProps = {
  mode: 'production' | 'development',
  port: number
}

// cb на будущее для передачи аргументов
const configuration = (env: T_WebpackProps): Configuration => {
  const MODE = env.mode || 'development';
  const IS_DEV = MODE === 'development';
  const PORT = env.port || undefined;

  return buildWebpackConfig({
    mode: "development",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "dist"),
      template: path.resolve(__dirname, "public", "index.html"),
      publicPath: path.resolve(__dirname, "public"),
    },
    isDev: IS_DEV,
    port: PORT || 9000,
  })
}

export default configuration;