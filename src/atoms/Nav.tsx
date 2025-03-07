import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { RiScanFill } from "react-icons/ri";
import Buttons from "../atoms/Buttons";``

const Nav: React.FC = () => {
    return (
        <nav className='bg-[#000022] flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-[4rem]'>
        <h1 className='text-[2rem] text-[#00ffff]'>Subsui</h1>
        <div className="flex flex-col md:flex-row items-center justify-even gap-5 text-[#ffffff] text-2xl">
            <span className="flex flex-row items-center text-xl gap-2"><IoTicketOutline  className="text-[#00ffff]"/><p>Events</p></span>
            <span className="flex flex-row items-center text-xl gap-2"> <FaRegCalendarAlt className="text-[#00ffff]"/><p>Calendar</p> </span>
            <span className="flex flex-row items-center text-xl gap-2"><RiScanFill className="text-[#00ffff]"/> <p>Discover</p></span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-even gap-5 text-[#ffffff] text-xl mt-4 md:mt-0">
            <span  className="flex flex-row text-xl gap-2">{new Date().toUTCString()}</span>
            <Buttons name='Create Event' link=''/>
            <span   className="text-[#00ffff]"><CiSearch /></span>
            <span  className="text-[#00ffff]"><IoMdNotificationsOutline /></span>
        </div>
        </nav>
    );
};

export default Nav;