import { I_Command } from "./types/Command.interface";
import { CalculatorEngine } from "./calculator-engine";

export class OperatorCommand implements I_Command {
  constructor(private engine: CalculatorEngine, private operator: "+" | "-" | "*" | "/") {
  }

  execute() {
    this.engine.pressOperator(this.operator);
  }
}