import Buttons from "../atoms/Buttons.js";
import Landing from "../assets/landing2.png";
import CustomConnectButton from "../atoms/CustomConnectButton.js";
import { useWallet } from "@suiet/wallet-kit";
import Nav from "../atoms/Nav.js";

const LandingPage = () => {
  const { connected } = useWallet();

  return (
    <div className="bg-[#000022] text-[#ffffff] font-custom w-full flex flex-col">
      <Nav />

      <div className="flex flex-row items-center justify-between h-screen  px-[10rem] ">
        <div className="w-[60%]">
          <h2 className="text-[2rem] text-[#00ffff]">Subsui</h2>
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

          {connected ? (
            <Buttons
              name="Create Your First Ticket Here!"
              link="/create-event"
            />
          ) : (
            <CustomConnectButton text="Connect Wallet to continue" />
          )}
        </div>
        <img src={Landing} alt="" className="w-[40rem]" />
      </div>
    </div>
  );
};

export default LandingPage;
