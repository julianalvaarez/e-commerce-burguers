import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BurguerApp } from "./BurguerApp";
import { BurguerContextProvider } from "./context/BurguerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BurguerContextProvider>
    <React.StrictMode>
      <BurguerApp />
    </React.StrictMode>
  </BurguerContextProvider>
);
