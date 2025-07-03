import type { Configuration } from "webpack";
import path from "path";
import { buildWebpackConfig } from "./configuration/webpack/build-webpack-config";

// cb на будущее для передачи аргументов
const configuration = (configuration: any): Configuration => {
  return buildWebpackConfig({
    mode: "development",
    paths: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      output: path.resolve(__dirname, "dist"),
    }
  })
}

export default configuration;