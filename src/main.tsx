import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app.tsx";
import "./index.css";

const root = createRoot(document.querySelector("#root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
