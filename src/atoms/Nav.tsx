import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { RiScanFill } from "react-icons/ri";
import CustomConnectButton from "./CustomConnectButton";
import { useWallet } from "@suiet/wallet-kit";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const { connected } = useWallet();
  return (
    <nav className="bg-[#000022] flex flex-col md:flex-row items-center justify-between md:py-[1rem] py-4 px-1 md:px-[2.5rem] lg:px-[4rem]">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-[2rem]">
        <h1 className="md:text-[2rem] text-[1.5rem] text-[#00ffff]">Subsui</h1>
        {connected && (
          
          <div className="flex flex-col md:flex-row items-center justify-even gap-5 md:justify-between text-[#ffffff] text-2xl">
            <span className="flex flex-row items-center text-xl gap-2">
              <FaHome className="text-[#00ffff]" />
              <Link to='/'><p className="cursor-pointer">Home</p></Link>
            </span>
            
            <span className="flex flex-row items-center text-[1.2rem] gap-2">
              <IoTicketOutline className="text-[#00ffff]" />
              <Link to='/create-event'><p className="cursor-pointer">Create Events</p></Link>
            </span>
            
            <span className="flex flex-row items-center text-xl gap-2">
              <RiScanFill className="text-[#00ffff]" />
              <Link to='/new-events'><p className="cursor-pointer">Discover Events</p></Link>
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-row items-center justify-even gap-5 md:gap-[1rem] text-[#ffffff] text-xl mt-4 md:mt-0">
        <CustomConnectButton />

        <span className="text-[#00ffff]">
          <IoMdNotificationsOutline />
        </span>
      </div>
    </nav>
  );
};

export default Nav;
