import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@coreui/coreui/dist/css/coreui.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { MessageProvider } from "./hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MessageProvider>
    <App />
  </MessageProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
