import { CalculatorEngine } from "./calculator-engine";
import { I_Command } from "./types/Command.interface";

export class DigitCommand implements I_Command {
  constructor(private engine: CalculatorEngine, private digit: string) {
  }

  execute() {
    this.engine.pressDigit(this.digit);
  }
}