import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";

export const client = new SuiClient({
  url: getFullnodeUrl("testnet"),
});

export const SMART_CONTRACT_ADDRESS =
  "ohgBNFPH2FiN27f2pXLkWiPosmdMcBaaEj1rUfSmf5A";
