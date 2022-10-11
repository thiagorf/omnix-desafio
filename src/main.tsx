import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routing/Router";
import "./index.css";
import { CepContextProvider } from "./context/CepContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CepContextProvider>
      <Router />
    </CepContextProvider>
  </React.StrictMode>
);
