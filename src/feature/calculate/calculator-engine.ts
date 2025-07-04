export class CalculatorEngine {
  private current: string = "0";
  private prev: string | null = null;
  private op: "+" | "-" | "*" | "/" | null = null;
  private overwrite: boolean = false;

  get display(): string {
    if (this.current === "NaN") return "Error";
    if (this.current === "Infinity") return "Infinity";

    if (this.prev !== null && this.op !== null) {
      if (this.overwrite) {
        return `${ this.prev } ${ this.op }`;
      } else {
        return `${ this.prev } ${ this.op } ${ this.current }`;
      }
    }

    return this.current;
  }

  pressDigit(digit: string) {
    if (this.current === "Infinity" || this.current === "-Infinity" || this.current === "NaN") {
      this.pressClear();
    }

    if (this.overwrite) {
      this.current = digit;
      this.overwrite = false;
    } else {
      if (digit === "." && this.current.includes(".")) return;
      this.current = this.current === "0" && digit !== "." ? digit : this.current + digit;
    }
  }

  pressOperator(operator: "+" | "-" | "*" | "/") {
    if (this.op && this.prev !== null && !this.overwrite) {
      this.compute();
      this.prev = this.current;
    } else if (!this.op) {
      this.prev = this.current;
    }
    this.op = operator;
    this.overwrite = true;
  }

  pressEquals() {
    if (this.op && this.prev !== null) {
      this.compute();
      this.op = null;
      this.prev = null;
      this.overwrite = true;
    }
  }

  pressClear() {
    this.current = "0";
    this.prev = null;
    this.op = null;
    this.overwrite = false;
  }

  pressBackspace() {
    if (this.current === "Infinity" || this.current === "-Infinity" || this.current === "NaN") {
      this.current = "0";
      this.prev = null;
      this.op = null;
      this.overwrite = false;
      return;
    }

    if (this.overwrite) {
      this.current = "0";
      this.overwrite = false;
      return;
    }

    if (this.current.length === 1) {
      if (this.prev === null && this.op === null) {
        this.current = "0";
      } else {
        this.current = "";
      }
    } else if (this.current.length === 0) {
      if (this.prev !== null) {
        this.current = this.prev;
        this.prev = null;
        this.op = null;
        this.overwrite = false;
      } else {
        this.current = "0";
      }
    } else {
      this.current = this.current.slice(0, -1);
    }
  }

  toggleSign() {
    if (this.current === "0") return;
    if (this.current.startsWith("-")) {
      this.current = this.current.slice(1);
    } else {
      this.current = "-" + this.current;
    }
  }

  private compute() {
    const a = parseFloat(this.prev!);
    const b = parseFloat(this.current);
    let result: number;

    switch (this.op) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        if (b === 0) {
          result = a === 0 ? NaN : (a > 0 ? Infinity : -Infinity);
        } else {
          result = a / b;
        }
        break;
      default:
        return;
    }

    this.current = String(result);
  }
}