import Buttons from "../atoms/Buttons.js";
import Landing from "../assets/landing2.png";
import CustomConnectButton from "../atoms/CustomConnectButton.js";
import { ConnectButton, useWallet } from "@suiet/wallet-kit";

const LandingPage = () => {
  const { connected } = useWallet();

  return (
    <div className="bg-[#000022] text-[#ffffff] font-custom w-full flex flex-col">
      <div className="flex flex-row items-center justify-between py-8 px-[10rem]">
        <h1 className="text-[#00ffff] text-[3rem] font-custom">SUI</h1>
        <CustomConnectButton />
      </div>

      <div className="flex flex-row items-center justify-between h-[80vh]  px-[10rem] ">
        <div className="font-sans-serif w-[60%]">
          <h2 className="text-[5rem] text-[#00ffff]">Subsui</h2>
          <div className="flex flex-col">
            <p className="text-[5rem] text-[#ffffff] mb-[-2rem]">
              Your Ticketing Journey
            </p>
            <p className="text-[5rem] text-gradient"> Starts Here.</p>
          </div>
          <p className="text-3xl mb-20">
            create your tickets, log customer tickets and handle event
            subscription
          </p>

          {connected ? (
            <Buttons name="Create Your First Ticket Here!" />
          ) : (
            <CustomConnectButton />
          )}
        </div>
        <img src={Landing} alt="" className="w-[40rem]" />
      </div>
    </div>
  );
};

export default LandingPage;
