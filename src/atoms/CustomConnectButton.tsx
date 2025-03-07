import { useWallet } from "@suiet/wallet-kit";

const CustomConnectButton = () => {
  const { connected, disconnect, select, allAvailableWallets } = useWallet();

  const handleConnect = () => {
    if (allAvailableWallets.length > 0) {
      select(allAvailableWallets[0].name); // Automatically selects the first available wallet
    } else {
      alert("No wallets found. Please install a wallet.");
    }
  };

  return (
    <button
      onClick={() => (connected ? disconnect() : handleConnect())}
      className="bg-[#00ffff] text-[#000022] px-6 py-2 rounded-lg font-bold hover:bg-[#008888] transition-all duration-300"
    >
      {connected ? "Disconnect Wallet" : "Connect Wallet"}
    </button>
  );
};

export default CustomConnectButton;
