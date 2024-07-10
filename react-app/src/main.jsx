import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import { BrowserRouter } from "react-router-dom";
import { MyProvider } from "./app/ProviderContextComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </MyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
