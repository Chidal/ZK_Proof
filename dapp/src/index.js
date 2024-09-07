import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";

import App from "./App";
import { DAPP_CONFIG } from "./config";
import "./index.css";
import { ZetachainProvider } from "./ZetachainContext";

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={DAPP_CONFIG}>
      <ZetachainProvider>
        <App />
      </ZetachainProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
