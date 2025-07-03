import { FC } from "react";
import clsx from "clsx";
import {container} from "./App.module.css";

interface I_AppProps {
  className?: string;
}

export const App: FC<I_AppProps> = (props) => {
  return (
    <div>
      <h1 className={ clsx(props.className, container) }>Testing React</h1>
    </div>
  )
}