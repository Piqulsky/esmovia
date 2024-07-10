import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { MyProvider } from "./MyContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </MyProvider>
  </React.StrictMode>
);
