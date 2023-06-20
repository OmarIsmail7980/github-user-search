import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProfileContextProvider } from "./context/ProfileContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ProfileContextProvider>
  </React.StrictMode>
);
