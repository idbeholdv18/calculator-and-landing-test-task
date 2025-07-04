import { I_Command } from "./types/Command.interface";

export class CalculatorInvoker {
  private hist: I_Command[] = [];

  execute(command: I_Command) {
    command.execute();
    this.hist.push(command); // for future
  }
}