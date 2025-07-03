import { FC } from "react";

interface I_AppProps {
  className?: string;
}

export const App: FC<I_AppProps> = (props) => {
  return (
    <div>
      <h1 className={ props.className }>Testing React</h1>
    </div>
  )
}