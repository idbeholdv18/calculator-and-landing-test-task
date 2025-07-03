import type { ResolveOptions } from "webpack";
import { T_WebpackConfigPaths } from "./types/webpack-config-paths.type";
import path from "path";

export const buildResolve = (paths: T_WebpackConfigPaths): ResolveOptions => {
  return {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    preferAbsolute: true,
    modules: [paths.entry, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      "@": paths.src,
    },
  }
}