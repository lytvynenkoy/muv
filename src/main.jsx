import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@app/styles/globals.css";
import "@app/styles/variables.css";
import "@app/styles/reset.css";

import App from "@app/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
