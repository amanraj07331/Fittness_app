import React from "react";
import ReactDOM from "react-dom/client"; // Ensure this is correct
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
