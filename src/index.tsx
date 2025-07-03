import { createRoot } from 'react-dom/client';
import { App } from "./app/ui/App";
import { StrictMode } from "react";
import "./app/ui/main.css"

document.body.innerHTML = '<div id="app"></div>';
const rootContainer = document.getElementById('app') as HTMLElement;
const root = createRoot(rootContainer);

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);