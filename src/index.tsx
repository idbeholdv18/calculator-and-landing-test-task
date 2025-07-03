import { createRoot } from 'react-dom/client';
import { App } from "./app/ui/App";
import { StrictMode } from "react";
import "./app/ui/styles/main.css"
import { ThemeProvider } from "@/shared/providers/theme";

document.body.innerHTML = '<div id="app"></div>';
const rootContainer = document.getElementById('app') as HTMLElement;
const root = createRoot(rootContainer);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </StrictMode>
);