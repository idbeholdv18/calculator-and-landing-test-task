import { CalculatorEngine } from "@/feature/calculate/calculator-engine";

export class BackspaceCommand {
  private engine: CalculatorEngine;

  constructor(engine: CalculatorEngine) {
    this.engine = engine;
  }

  execute() {
    this.engine.pressBackspace();
  }
}