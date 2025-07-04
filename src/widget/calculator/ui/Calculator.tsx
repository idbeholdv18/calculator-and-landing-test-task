import { FC, useEffect, useReducer, useRef, useState } from "react";
import clsx from "clsx";
import * as cls from "./Calculator.module.css";
import { Button } from "@/shared/ui/button";
import { ScrollAndLockButton } from "@/feature/scroll-and-lock/ui/ScrollAndLockButton";
import { CalculatorEngine } from "@/feature/calculate/calculator-engine";
import { CalculatorInvoker } from "@/feature/calculate/invoker";
import { DigitCommand } from "@/feature/calculate/digit-command";
import { ClearCommand } from "@/feature/calculate/clear-command";
import { ToggleSignCommand } from "@/feature/calculate/sign-command";
import { OperatorCommand } from "@/feature/calculate/op-command";
import { EqualsCommand } from "@/feature/calculate/eq-command";
import { BackspaceCommand } from "@/feature/calculate/backspace-command";

interface I_CalculatorProps {
  className?: string;
}

const buttons = ["AC", "±", "<", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "lock", "0", ".", "="];

// https://css-tricks.com/snippets/css/complete-guide-grid/

export const Calculator: FC<I_CalculatorProps> = (props) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const engine = useRef(new CalculatorEngine()).current;
  const invoker = useRef(new CalculatorInvoker()).current;

  const handleClick = (el: string) => {
    switch (el) {
      case "AC":
        invoker.execute(new ClearCommand(engine));
        break;
      case "±":
        invoker.execute(new ToggleSignCommand(engine));
        break;
      case "<":
        invoker.execute(new BackspaceCommand(engine));
        break;
      case "/":
      case "*":
      case "-":
      case "+":
        invoker.execute(new OperatorCommand(engine, el));
        break;
      case "=":
        invoker.execute(new EqualsCommand(engine));
        break;
      case "lock":
        return;
      default:
        invoker.execute(new DigitCommand(engine, el));
    }

    forceUpdate();
  };

  const normalizeKey = ({ key, code }: { key: string, code: string }): string => {
    if (key === "Enter") return "=";
    if (key === "Backspace") return "<";
    if (key === "Escape") return "AC";
    if (code === "KeyS") return "±";
    return key;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key, code } = e;

      const normalized_key = normalizeKey({ key, code });
      if (!buttons.includes(normalized_key)) return;

      e.preventDefault();
      setActiveKey(normalized_key);
      handleClick(normalized_key);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setActiveKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);


  return (
    <div className={ clsx(props.className, cls.calculatorLayout) }>
      <div className={ cls.displayLayout }>
        <div className={ cls.displayWrapper }>
          <div className={ cls.displayText }>{ engine.display }</div>
        </div>
      </div>
      { buttons.map((el) =>
        el === "lock" ? (
          <ScrollAndLockButton key={ el }/>
        ) : (
          <Button
            key={ el }
            rounded="rxl"
            size="xl"
            onClick={ () => handleClick(el) }
            disabled={ el === "%" }
            isPressed={activeKey === el}
          >
            { el }
          </Button>
        )
      ) }
    </div>
  )
}