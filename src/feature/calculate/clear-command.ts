import { I_Command } from "./types/Command.interface";
import { CalculatorEngine } from "./calculator-engine";

export class ClearCommand implements I_Command {
  constructor(private engine: CalculatorEngine) {
  }

  execute() {
    this.engine.pressClear();
  }
}