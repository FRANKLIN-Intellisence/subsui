import { useState } from "react";
import { useWallet, useAccountBalance } from "@suiet/wallet-kit";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CustomConnectButton = () => {
  const { connected, disconnect, select, allAvailableWallets, address } =
    useWallet();
  const { balance, isLoading } = useAccountBalance();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Format wallet address (e.g., 0xabc...1234)
  const formatAddress = (addr: string | undefined) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  // Format balance from BigInt to a readable number (convert from MIST to SUI)
  const formatBalance = () => {
    if (isLoading) return "Loading...";
    return balance
      ? (Number(balance) / 1_000_000_000).toFixed(2) + " SUI"
      : "0 SUI";
  };

  // Handle wallet connection
  const handleConnect = () => {
    if (allAvailableWallets.length > 0) {
      select(allAvailableWallets[0].name);
    } else {
      alert("No wallets found. Please install a wallet.");
    }
  };

  return (
    <div className="relative">
      {connected ? (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-[#00ffff] text-[#000022] px-6 py-2 rounded-[15px] font-bold hover:bg-[#008888] transition-all duration-300 flex items-center gap-4 font-light"
          >
            <span> {formatBalance()}</span>
            <span>{formatAddress(address)}</span>
            <MdOutlineKeyboardArrowDown />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg  rounded-[15px] overflow-hidden text-center w-full font-normal">
              <button
                onClick={() => {
                  disconnect();
                  setDropdownOpen(false);
                }}
                className="block w-full px-4 py-2 hover:bg-gray-200 text-center"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-[#00ffff] text-[#000022] px-6 py-2  rounded-[15px] text-center font-bold hover:bg-[#008888] transition-all duration-300 font-light"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default CustomConnectButton;
