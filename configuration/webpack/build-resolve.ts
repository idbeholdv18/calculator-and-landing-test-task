import type { ResolveOptions } from "webpack";

export const buildResolve = (): ResolveOptions => {
  return {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  }
}