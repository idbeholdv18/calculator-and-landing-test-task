import type {ModuleOptions, RuleSetRule} from "webpack"

export const buildModule = (): ModuleOptions => {
  const rules: RuleSetRule[] = [];

  const ts_loader: RuleSetRule = {
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: 'babel-loader',
  };

  rules.push(ts_loader);

  return {
    rules
  }
}