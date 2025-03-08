import { FormEvent, useState } from "react";
import Nav from "../atoms/Nav";
import { FaRegImage } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../atoms/Buttons";
import DatePicker from "react-datepicker";
import { LuCalendarDays } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";
import { SMART_CONTRACT_ADDRESS } from "../utils/sui.config";
import { Transaction } from "@mysten/sui/transactions";
import { useWallet } from "@suiet/wallet-kit";

const TicketPage = () => {
  const wallet = useWallet();
  type EventState = {
    name: string;
    location: string;
    description: string;
    pricePerTicket: string;
    privateEvent: boolean;
    stakingEnabled: boolean;
    eventCategory: string;
    maxTickets: string;
  };

  const [event, setEvent] = useState<EventState>({
    name: "Event Name",
    location: "Itam",
    description: "Itam2",
    pricePerTicket: "0",
    privateEvent: false,
    stakingEnabled: false,
    eventCategory: "Itam3",
    maxTickets: "100",
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imgURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(imgURL);
    }
  };

  const handleCreateEvent = async (e: FormEvent) => {
    e.preventDefault();
    const start_date = Math.floor(startDate.getTime() / 1000); // Convert to seconds for Sui
    // const end_date = Math.floor(endDate.getTime() / 1000);

    try {
      // Convert string values to appropriate types for the contract
      const maxTickets = parseInt(event.maxTickets) || 100;
      const pricePerTicket = parseInt(event.pricePerTicket) || 0;

      const tx = new Transaction();

      // Properly format arguments for Sui Move call
      tx.moveCall({
        target: `${SMART_CONTRACT_ADDRESS}::subsui_contracts::create_event`,
        arguments: [
          tx.pure.string(event.name),
          tx.pure.string(event.description),
          tx.pure.string(event.location),
          tx.pure.u64(start_date),
          tx.pure.u64(maxTickets),
          tx.pure.u64(pricePerTicket),
          tx.pure.string(event.eventCategory),
          tx.pure.bool(event.privateEvent),
        ],
      });

      const txId = await wallet.signTransaction({ transaction: tx });

      console.log("Transaction successful:", txId);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-start justify-center bg-[#000022] text-[#ffffff] h-screen gap-[2rem] mt-[3rem]">
        <div className="relative w-[24rem] h-[24rem] text-black bg-[#fff] flex items-center justify-center overflow-hidden rounded-md">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Event"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <FaRegImage className="text-gray-400 text-7xl" />
          )}
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageChange}
          />
        </div>

        <form
          className="flex flex-col gap-4 w-[30rem]"
          onSubmit={handleCreateEvent}
        >
          <input
            className="text-[4rem] text-[#ffffff] focus:outline-none rounded-md"
            type="text"
            placeholder="Event Name"
            value={event.name}
            onChange={(e) => {
              setEvent({ ...event, name: e.target.value });
            }}
          />
          <p className="text-[1rem]">
            Welcome to the ticket page. Here you can view and manage your
            tickets.
          </p>

          <div className="setDateTime h-fit flex flex-row justify-between text-2xl ">
            <div className="flex gap-4 flex flex-col w-full ">
              <div className="flex gap-4 items-center justify-start bg-[#010131] w-full">
                <div className="flex gap-2 text-black bg-[#00ffff] px-4 py-2 w-[30%]">
                  <LuCalendarDays />
                  <p className="text-[1rem]">Start Date</p>
                </div>

                <DatePicker
                  className="text-[1rem] px-4 py-1 flex-1"
                  selected={startDate}
                  onChange={(date) => setStartDate(date as Date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
              <div className="flex gap-4 items-center justify-start bg-[#010131] ">
                <div className="flex gap-2 text-black bg-[#00ffff] px-4 py-2 w-[30%]">
                  <LuCalendarDays />
                  <p className="text-[1rem]">End Date</p>
                </div>

                <DatePicker
                  className="text-[1rem] px-4 py-1 flex-1"
                  selected={endDate}
                  onChange={(date) => setEndDate(date as Date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-4 py-2 bg-[#010131] ">
            <span className="flex gap-5 items-center justify-start">
              <FaLocationDot className="text-[1rem]" />
              <p className="text-[1rem]">Add Event Location</p>
            </span>
            <input
              className="outline-none px-4 py-1 text-[.9rem]"
              type="text"
              placeholder="Offline Location or Virtual Link "
            />
          </div>

          <div className="flex flex-col gap-4 px-4 py-2 bg-[#010131] ">
            <span className="flex gap-5 ">
              <FaLocationDot className="text-[1rem]" />
              <p className="text-[1rem]">Add Description</p>
            </span>
            <input
              className="outline-none px-4 py-1 text-[.9rem]"
              type="text"
              placeholder="Add event description"
            />
          </div>

          <div className="flex justify-between items-center gap-4">
            <label className="flex justify-between items-center gap-4">
              <span>Private Event</span>
              <input
                type="checkbox"
                checked={event.privateEvent}
                onChange={() =>
                  setEvent({ ...event, privateEvent: !event.privateEvent })
                }
              />
            </label>
            <label className="flex justify-between items-center gap-4">
              <span>Staking Enabled</span>
              <input
                type="checkbox"
                checked={event.stakingEnabled}
                onChange={() =>
                  setEvent({ ...event, stakingEnabled: !event.stakingEnabled })
                }
              />
            </label>
          </div>

          {/* Event Category Dropdown */}
          <label className="flex justify-between items-center">
            <span>Event Category</span>
            <select
              className="bg-[#fff] text-black px-2 py-1 rounded"
              value={event.eventCategory}
              onChange={(e) =>
                setEvent({ ...event, eventCategory: e.target.value })
              }
            >
              <option value="">Select Category</option>
              <option value="Conference">Conference</option>
              <option value="Concert">Concert</option>
              <option value="Webinar">Webinar</option>
              <option value="Meetup">Meetup</option>
            </select>
          </label>

          {/* Ticket Amount Input */}
          <label className="flex justify-between items-center">
            <span>Maximum Tickets</span>
            <input
              className="bg-[#fff] text-black px-2 py-1 rounded"
              type="number"
              min="1"
              value={event.maxTickets}
              onChange={(e) =>
                setEvent({ ...event, maxTickets: e.target.value })
              }
            />
          </label>

          <Button name="Create Event" type="submit" />
          <Button name="Create Event" link="/event-created" />
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
