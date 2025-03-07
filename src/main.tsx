import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  WalletProvider,
  AllDefaultWallets,
  defineStashedWallet,
} from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

const stashedWalletConfig = defineStashedWallet({
  appName: "Your DApp Name",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WalletProvider
      defaultWallets={[...AllDefaultWallets, stashedWalletConfig]}
      
    >
      <App />
    </WalletProvider>
  </StrictMode>
);
