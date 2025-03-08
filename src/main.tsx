import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  WalletProvider,
  AllDefaultWallets,
  SuiDevnetChain,
  Chain,
  SuiTestnetChain,
} from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

const supportedChains: Chain[] = [SuiDevnetChain, SuiTestnetChain];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WalletProvider
      defaultWallets={[...AllDefaultWallets]}
      chains={supportedChains}
    >
      <App />
    </WalletProvider>
  </StrictMode>
);
