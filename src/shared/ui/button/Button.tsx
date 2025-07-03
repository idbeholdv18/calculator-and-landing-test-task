import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";
import * as cls from "./Button.module.css"

interface I_ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  className?: string;
  color?: "primary" | "secondary" | "contrast";
  variant?: "filled" | "outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: "rxs" | "rsm" | "rmd" | "rlg" | "rxl" | "rfull";
}

export const Button: FC<I_ButtonProps> = ({ children, className, color, variant, size, rounded, ...props }) => {
  const isStringChild = typeof children === "string";

  return (
    <button
      className={
        clsx(
          className,
          cls[color || "primary"],
          cls[variant || "filled"],
          cls[size || "md"],
          rounded && cls[rounded]
        )
      }
      { ...props }
    >
      { isStringChild ? (
        <span className={ cls.text }>{ children }</span>
      ) : (
        children
      ) }
    </button>
  )
}