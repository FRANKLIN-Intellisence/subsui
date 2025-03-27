import Buttons from "../atoms/Buttons.js";
import Landing from "../assets/landing2.png";
// import CustomConnectButton from "../atoms/Button/SuiCustomConnectButton.js";
// import { useWallet } from "@suiet/wallet-kit";
import Nav from "../atoms/Nav.js";
import { EvmCustomConnectButton } from "../atoms/Button/EvmCustomConnetButton.js";
import { useAccount } from "wagmi";
import logo from "../assets/logo.png";


const LandingPage = () => {
  // const { connected } = useWallet();

  const { isConnected } = useAccount()

  return (
    <div className="bg-[#000022] text-[#ffffff] font-custom w-full flex flex-col">
      <Nav />

      <div className="flex flex-row items-center justify-between h-screen  px-[10rem] ">
        <div className="w-[60%]">
          <img src={logo} alt="Subsui Logo" className="w-[7rem]" />
          <div className="flex flex-col">
            <p className="text-[4.5rem] text-[#ffffff] font-bold">
              Your Ticketing Journey
            </p>
            <p className="text-[6rem] text-gradient font-bold"> Starts Here.</p>
          </div>
          <p className="text-[1.5rem] mb-[2rem]">
            Create your Events, log customer tickets and handle event
            subscription
          </p>

          {isConnected ? (
            <Buttons
              name="Create Your First Ticket Here!"
              link="/create-event"
            />
          ) : (
            // <CustomConnectButton text="Connect Wallet to continue" />
            <EvmCustomConnectButton />
          )}
        </div>
        <img src={Landing} alt="" className="w-[40rem]" />
      </div>
    </div>
  );
};

export default LandingPage;
