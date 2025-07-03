import { FC } from "react";
import clsx from "clsx";
import { Button } from "@/shared/ui/button";
import { ThemeToggle } from "@/widget/theme-toggle";
import { Container } from "@/shared/ui/container/Container";

interface I_AppProps {
  className?: string;
}

export const App: FC<I_AppProps> = (props) => {
  return (
    <div className="light_mode">
      <Container>
        <h1 className={ clsx(props.className) }>Testing React</h1>
        <Button>Test</Button>
        <ThemeToggle/>
      </Container>

    </div>
  )
}