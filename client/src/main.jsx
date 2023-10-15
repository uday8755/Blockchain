import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter } from 'react-router-dom';
import { StateContextProvider } from './context';
import './index.css';
import { Sepolia } from "@thirdweb-dev/chains"
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "etherscan-sepolia";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebProvider activeChain={Sepolia}
      clientId = "5dabec6d3aa171a66ac06f2f4d5a89d9"
      >
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);
