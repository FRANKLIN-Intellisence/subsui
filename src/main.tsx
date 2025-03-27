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
import EvmWallet from "./lib/lisk/evm-wallet.tsx";



const supportedChains: Chain[] = [SuiDevnetChain, SuiTestnetChain];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WalletProvider
      defaultWallets={[...AllDefaultWallets]}
      chains={supportedChains}
    >
      <EvmWallet>
        <App />
      </EvmWallet>
    </WalletProvider>
  </StrictMode>
);
