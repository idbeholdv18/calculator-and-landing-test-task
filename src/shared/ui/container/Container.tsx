import { FC, ReactNode } from "react";
import * as cls from "./Container.module.css"
import clsx from "clsx";

interface I_ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container: FC<I_ContainerProps> = (props) => {
  return (
    <div className={ clsx(props.className, cls.container) }>
      { props.children }
    </div>
  )
}