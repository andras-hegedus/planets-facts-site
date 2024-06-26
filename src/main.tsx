import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter
  basename={import.meta.env.DEV ? '/' : '/planets-facts-site/'}
>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
