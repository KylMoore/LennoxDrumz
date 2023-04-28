import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./Components/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
