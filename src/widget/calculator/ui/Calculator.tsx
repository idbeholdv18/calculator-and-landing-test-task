import { FC } from "react";
import clsx from "clsx";
import * as cls from "./Calculator.module.css";
import { Button } from "@/shared/ui/button";

interface I_CalculatorProps {
  className?: string;
}

const buttons = ["AC", "+_", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "hist", "0", ",", "="];

// https://css-tricks.com/snippets/css/complete-guide-grid/

export const Calculator: FC<I_CalculatorProps> = (props) => {
  return (
    <div className={ clsx(props.className, cls.calculatorLayout) }>
      <div className={clsx(cls.displayLayout)}></div>
      {buttons.map((el) => <Button rounded={"rxl"} size={"xl"}>{el}</Button>)}
    </div>
  )
}