import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BookProvide } from "./useContext/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookProvide>
      <App />
    </BookProvide>
  </React.StrictMode>
);
