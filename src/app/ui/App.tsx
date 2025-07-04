import { FC } from "react";
import clsx from "clsx";
import { ThemeToggle } from "@/widget/theme-toggle";
import { Container } from "@/shared/ui/container/Container";
import { Calculator } from "@/widget/calculator";
import * as cls from "./App.module.css";

interface I_AppProps {
  className?: string;
}

export const App: FC<I_AppProps> = (props) => {
  return (
    <div>
      <Container className={ clsx(cls.container) }>
        <h1>Made by @idbeholdv18</h1>
        <ThemeToggle/>
        <Calculator/>
      </Container>
    </div>
  )
}